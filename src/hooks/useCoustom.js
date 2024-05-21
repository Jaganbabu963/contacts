import { useState } from "react";

const useCoustom = () => {
  const [isOpen, setOpen] = useState(false);

  function onOpen() {
    setOpen(true);
  }
  function onClose() {
    setOpen(false);
  }

  return { isOpen, onOpen, onClose };
};

export default useCoustom;
