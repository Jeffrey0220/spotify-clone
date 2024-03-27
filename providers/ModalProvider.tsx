"use client";

import Modal from "@/components/Modal";
import React, { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Modal
        title="test modal"
        description="test description"
        isOpen
        onChange={() => {}}
      >
        children
      </Modal>
    </>
  );
};

export default ModalProvider;
