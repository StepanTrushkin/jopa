import React from "react";
import "./Modal.modules.scss";
//import { useState } from "react";

interface ModalProps {
    children?: React.ReactNode;
    title: string;
    onClose: () => void;
}


function Modal({ children, title, onClose }: ModalProps) {
    return (
        <>
            <div className="overlay" onClick={onClose}/> 

            <div className="modal">
                <svg viewBox="0 0 200 200"  onClick={onClose}>
                    <title />
                    <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                </svg>
                <p> { title } </p>
                {children}
            </div>
        </>
    );
}

export default Modal;
