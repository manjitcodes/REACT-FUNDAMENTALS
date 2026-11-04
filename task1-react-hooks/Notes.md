**useMemo:** In an e-commerce application displaying thousands of products, I would use useMemo to cache the filtered product list so that changing an unrelated UI state, such as opening a sidebar, doesn't require filtering all products again.

**useCallback:** In a dashboard, I would use useCallback for an event handler passed to a child component wrapped in React.memo, so that unrelated parent state changes don't create a new function reference and unnecessarily re-render the child.

React Context is useful when multiple components at different nesting levels need access to the same shared data, such as an application theme or authenticated user, without passing props through intermediate components. For data needed by only one component, I would use local state with useState, and for frequently changing shared state with complex update logic, I would consider a dedicated state management library such as Zustand or Redux. Context is not a replacement for all state management.

# Keyboard Accessibility Audit — Phase 8 Task 3

**Components tested:** ThemeButton, Primary Button, Secondary Button, Disabled Button.

**1. Could I reach every interactive element using Tab?**

The enabled theme, primary and secondary buttons were reachable using Tab. The disabled button was skipped, as expected.

**2. Could I identify which element had focus?**

I checked whether the focused button had a clearly visible outline. The custom Button component uses `:focus-visible` to provide a visible focus indicator.

**3. Could I activate buttons using the keyboard?**

I tested Enter and Space on the enabled buttons. Both keys activated the buttons successfully.

**4. Did anything fail?**

[Write any actual problems you discovered. If nothing failed, state that all tested interactions worked.]

**5. What improvements were made?**

I used semantic HTML `<button>` elements instead of clickable divs, added visible focus indicators, and used the actual disabled attribute rather than only styling the button to look disabled.

**Conclusion:**

The tested components support keyboard navigation and activation without requiring mouse interaction.