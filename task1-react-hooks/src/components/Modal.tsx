
import { useEffect, useId, useRef, type ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const titleId = useId();

  // Move focus into the modal and restore it when closed.
  useEffect(() => {
    if (!isOpen) {
      previousFocus.current?.focus();
      previousFocus.current = null;
      return;
    }

    previousFocus.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    modalRef.current?.focus();
  }, [isOpen]);

  // Handle Escape and keep keyboard focus inside the modal.
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const modal = modalRef.current;
      if (!modal) return;

      const selector = [
        "a[href]",
        "area[href]",
        "button:not(:disabled)",
        'input:not(:disabled):not([type="hidden"])',
        "select:not(:disabled)",
        "textarea:not(:disabled)",
        '[contenteditable="true"]',
        '[tabindex]:not([tabindex="-1"])',
      ].join(",");

      const elements = Array.from(
        modal.querySelectorAll<HTMLElement>(selector)
      ).filter(
        (element) =>
          element.getAttribute("aria-hidden") !== "true" &&
          element.getClientRects().length > 0
      );

      // If no controls exist, keep focus on the dialog.
      if (elements.length === 0) {
        event.preventDefault();
        modal.focus();
        return;
      }

      const firstElement = elements[0];
      const lastElement = elements[elements.length - 1];
      const activeElement = document.activeElement;

      // If focus is outside the dialog's controls, bring it back.
      if (
        activeElement === modal ||
        !elements.includes(activeElement as HTMLElement)
      ) {
        event.preventDefault();
        (event.shiftKey ? lastElement : firstElement).focus();
        return;
      }

      // Shift + Tab from the first control goes to the last.
      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      // Tab from the last control goes to the first.
      if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        ref={modalRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <h2 id={titleId}>{title}</h2>

        <div className="modal-content">
          {children}
        </div>

        <div className="modal-actions">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-secondary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
