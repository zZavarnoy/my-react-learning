import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import style from "./style.module.css";

const modalDOMElement = document.getElementById("modal");

const Modal = ({ modalActive, onClose, children }) => {
    const element = useMemo(() => document.createElement("div"), []);

    useEffect(() => {
        if (modalActive) {
            modalDOMElement.appendChild(element);
            return () => {
                modalDOMElement.removeChild(element);
            };
        }
    });

    if (modalActive) {
        return createPortal(
            <div className={style.modal_background} onClick={onClose}>
                <div
                    className={style.modal_card}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>,
            element
        );
    } else {
        return null;
    }
};

export default Modal;
