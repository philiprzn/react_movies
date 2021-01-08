import React from "react";
import './deleteMovieModalWindow.css'
import {ContextConsumer} from "../ModalContextProvider/ModalContextProvider";

const DeleteMovieModalWindow = (props) => {
    const {closeModal, deleteMovie} = props;

    return (
        <ContextConsumer >
            {({ app, closeModal }) => (
                <div className="delete-modal-window">
                    <button onClick={closeModal} className="button">Delete Movie</button>
                    <button onClick={closeModal} className="button close-button">Close</button>
                </div>
            )}
        </ContextConsumer>
    )
};

export default DeleteMovieModalWindow;