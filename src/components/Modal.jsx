import { createPortal } from "react-dom"
import { CiCircleRemove } from "react-icons/ci";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
          <div className=" grid backdrop-blur h-screen top-0 w-screen z-10 absolute ">
          <div className="bg-slate-50 z-50 relative min-h-[250px] min-w-[80%] m-auto p-1 rounded-md">
          <div className=" flex m-0 justify-end">
          <CiCircleRemove onClick={onClose} className="text-4xl cursor-pointer" />
          </div>
          {children}
          </div>
          </div>
      )}
    </>,document.getElementById("modal-root")
  );
};

export default Modal;
