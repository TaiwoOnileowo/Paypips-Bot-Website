
import { ModalBody, ModalContent } from "../ui/AnimatedModal.tsx";

import ModalForm from "./ModalForm.jsx";
const Modal = () => {
  return (
    <ModalBody>
      <ModalContent>
        <h1 className="text-2xl font-bold text-center">Get Started</h1>
        <ModalForm />
      </ModalContent>
    </ModalBody>
  );
};

export default Modal;
