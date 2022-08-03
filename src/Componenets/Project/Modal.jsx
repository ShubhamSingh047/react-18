import { cleanup } from "@testing-library/react";
import { useEffect } from "react";

const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
    return () => {
      console.log("cleanup");
    };
  });
  return <div>{children}</div>;
};

export default Modal;
