# `useEffectOnUpdates`

Run useEffect only on updates, ignore first render. Has the same API like useEffect

## Usage

```
import * as React from 'react';
import { useEffectOnUpdates } from '@react-reusable/hooks';

export const SomeComponent = () => {
  const [counter, setCounter] = useState(0);

  useEffectOnUpdates(() => {
    // Will log counter value only when it changed, will not log 0
    console.log(counter);

    return () => {
      // do something on unmount, like in useEffect
    }
  }, [counter]);

  return (
      <button onClick={() => { setCounter(prev => prev++) }}>
        +
      </button>
  );
};
```
