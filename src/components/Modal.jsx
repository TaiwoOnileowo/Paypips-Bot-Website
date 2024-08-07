import React from "react";
import { ModalBody, ModalContent } from "../ui/AnimatedModal.tsx";

import ModalForm from "./ModalForm.jsx";
const Modal = () => {
  return (
    <ModalBody>
      <ModalContent>
        <ModalForm />
      </ModalContent>
    </ModalBody>
  );
};

export default Modal;
