import { useState, useCallback } from 'react';

interface IUseOpenPopupReturn {
  opened: boolean;
  openedOnce: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const useOpenPopup = (): IUseOpenPopupReturn => {
  const [openedOnce, setOpenedOnce] = useState(false);
  const [opened, setOpened] = useState(false);
  const open = useCallback(() => {
    if (!openedOnce) {
      setOpenedOnce(true);
    }

    setOpened(true);
  }, [setOpened, setOpenedOnce, openedOnce]);

  const close = useCallback(() => {
    setOpened(false);
  }, [setOpened]);

  const toggle = useCallback(() => {
    if (opened) {
      close();
    } else {
      open();
    }
  }, [opened, open, close]);

  return {
    open,
    close,
    toggle,
    opened,
    openedOnce,
  };
};
