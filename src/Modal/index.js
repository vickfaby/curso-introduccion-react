import React from "react";
import { createPortal } from "react-dom";
import ReactDOM from "react-dom/client";
import "./Modal.css"

function Modal({children}) {
  return createPortal(
    <div className="ModalBackground">
      {children}
    </div>, // que es lo q crea
    document.getElementById('modal') // nodo en donde lo crea
  );
}
export {Modal}