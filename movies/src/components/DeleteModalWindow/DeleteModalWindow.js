import React from "react";
import './deleteModalWindow.css'

const DeleteModalWindow = (props) => {
    const {closeModal, deleteMovie} = props;

    return (
        <div className="delete-modal-window">
            <button onClick={deleteMovie} className="button">Delete Movie</button>
            <button onClick={closeModal} className="button close-button">Close</button>
        </div>
    )
};

export default DeleteModalWindow;