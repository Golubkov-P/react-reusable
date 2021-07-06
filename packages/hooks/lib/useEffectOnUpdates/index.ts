import { useEffect, useRef } from 'react';

export function useEffectOnUpdates(callback: () => void, deps: Array<any>) {
  const ref = useRef<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      return callback();
    }

    ref.current = true;
  }, deps);
}
