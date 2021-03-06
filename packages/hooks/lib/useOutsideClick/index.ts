import { useRef, useCallback, useEffect } from 'react';
import type { MouseEvent, MutableRefObject } from 'react';

interface IUseOutsideClickParams {
  callback: (e: MouseEvent) => void;
  ref?: MutableRefObject<any>;
  shouldHandle: boolean;
}

export const useOutsideClick = ({ callback, ref, shouldHandle }: IUseOutsideClickParams) => {
  const refFallback = useRef(null);
  const handleDocumentClick = useCallback((e) => {
    const { target } = e;
    const { current } = ref || refFallback;

    if (shouldHandle && current && current !== target && !current.contains(target)) {
      callback(e);
    }
  }, [callback, ref, refFallback, shouldHandle]);

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [handleDocumentClick]);

  return ref || refFallback;
};
