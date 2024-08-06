import React from "react";
import { ModalBody, ModalContent } from "../ui/AnimatedModal";
import ModalForm from "./ModalForm.jsx";
const Modalb = () => {
  return (
    <ModalBody>
      <ModalContent>
        {/* <h1></h1> */}
        <ModalForm />
      </ModalContent>
    </ModalBody>
  );
};

export default Modalb;
