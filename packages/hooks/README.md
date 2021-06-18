# `useDisableScroll`

> React hook that helps you to disable scroll. For example, it can be useful when you open modal.

## Installing

```
// with npm:
nmp i @react-reusable/use-disable-scroll

// or with yarn:
yarn add @react-reusable/use-disable-scroll
```

## Usage

```
import * as React from 'react';
import { useDisableScroll } from '@react-reusable/use-disable-scroll';

export const Modal = props => {
  const { opened } = props;

  // Use this ref to enable scroll inside element
  const scrollableContentRef = useDisableScroll(opened);

  ...

  return (
    <div className="Modal" ref={scrollableContentRef}>
      ...
    </div>
  );
};

```
