
import { useState } from "react";

function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue((previousValue) => !previousValue);
  };

  return {
    value,
    toggle,
    setValue,
  };
}

export default useToggle;
