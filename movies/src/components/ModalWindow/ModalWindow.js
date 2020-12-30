import React from 'react';
import './modalWindow.css';

const ModalWindow = (props) => {
    const { closeModal } = props;
    return (
        <>
            <div className="modal-window">
                <div className="add-movie-form">
                    <button onClick={closeModal} className="button close-button">Close</button>
                </div>
            </div>
        </>
    )
};

export default ModalWindow;