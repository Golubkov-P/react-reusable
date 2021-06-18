# `useOpenModal`

> React hook that helps you manage popups/modals/tooltips open state.

## Usage

```
import * as React from 'react';
import loadable from 'react-loadable';
import { useOpenPopup } from '@react-reusable/hooks';

const Popup = loadable({
  loader: () => import('path/to/popup'),
  loading: () => null,
});

export const SomeComponent = () => {
  const {
    // callback for opening popup
    open, 
    // callback for closing popup
    close,
    // toggling visibility state
    toggle,
    // indicates open state for popup
    opened,
    // it's like opened, but when it becomes `true` it stays `true` forever
    // useful when you use react-loadable and want to animate visibility changes
    openedOnce,
  } = useOpenPopup();

  return (
    <>
      <button onClick={open}>
        open popup
      </button>

      // Load popup only on first open event
      {openedOnce && (
        <Popup
          // control visibility
          visible={opened}
          close={close}
        />
      )}
    </>
  );
};
```
