# `useBoolean`

> React hook that makes it easer to use boolean state. 

## Usage

```
import * as React from 'react';
import { useBoolean } from '@react-reusable/hooks';

export const SomeComponent = props => {
  const {
      value,
      setTrue,
      setFalse,
      toggle,
  } = useBoolean(props.initialBooleanValue)

  ...

  return (
    <>
        <Button onClick={toggle}>
            Toggle visibility
        </Button>
        <Button onClick={setTrue}>
            Set visible
        </Button>
        <Button onClick={setFalse}>
            Set invisible
        </Button>

        {value && (
            <SomeItem />
        )}
    </>
  );
};

```
