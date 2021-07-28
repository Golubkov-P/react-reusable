import { useState, useCallback } from 'react';

export const useBoolean = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);
  const setTrue = useCallback(() => {
    setValue(true);
  }, [setValue]);
  const setFalse = useCallback(() => {
    setValue(true);
  }, [setValue]);
  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, [setValue]);

  return {
    value,
    toggle,
    setTrue,
    setFalse,
  };
};
