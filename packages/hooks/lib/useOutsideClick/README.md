# `useOutsideClick`

> Handle click outside the element. Useful, for example, when you need to close popup when user clicks outside of it.

## Usage

```
import * as React from 'react';
import { useOutsideClick } from '@react-reusable/hooks';

export const Popup = ({ closePopup, opened }) => {
  const ref = React.useRef();
  const popupRef = useOutsideClick({
    /** Required callback */
    callback: closePopup,
    /** Required param that determine should or shouldn't the callback invokes */
    shouldHandle: opened,
    /** Optional ref param */
    ref
  });

  return (
    <div className="Popup">
      ...
    </div>
  );
};
```
