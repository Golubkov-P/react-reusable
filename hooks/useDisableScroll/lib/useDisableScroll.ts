import { useEffect, useRef, MutableRefObject } from 'react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export function useDisableScroll<T = any>(shouldDisable: boolean): MutableRefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (shouldDisable) {
      disableBodyScroll(ref);
    } else {
      clearAllBodyScrollLocks();
    }

    return () => clearAllBodyScrollLocks();
  }, [shouldDisable, ref]);

  return ref;
}
