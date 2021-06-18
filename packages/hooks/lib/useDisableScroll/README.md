# `useDisableScroll`

> React hook that helps you to disable scroll. For example, it can be useful when you open modal.

## Usage

```
import * as React from 'react';
import { useDisableScroll } from '@react-reusable/hooks/dist/useDisableScroll';

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
