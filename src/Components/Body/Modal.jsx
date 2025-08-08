import React from "react";
import { FiX } from "react-icons/fi";

const Modal = ({ children, open, onClose, title = "" }) => {
  return (
    <>
      {open && (
        <div className="fixed inset-0 w-screen h-screen bg-gray-500/30 background-blur-[1px] flex justify-center overflow-y-auto p-4 z-50">
          <div className="card m-auto w-[400px] p-4 bg-white animate-bounce-short  px-8 py-5 shadow-lg border border-gray-400  rounded-lg z-50">
            <div className="flex justify-between items-center mx-4 py-4 border-b border-gray-300">
              <h4 className="text-lg font-bold">{title || "Modal"}</h4>
              <button
                onClick={onClose}
                className="hover:text-red-400 p-1 hover:bg-red-100 rounded-lg cursor-pointer transition-all duration-300"
              >
                <FiX size={20} />
              </button>
            </div>
            <div className="px-4 py-4">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
