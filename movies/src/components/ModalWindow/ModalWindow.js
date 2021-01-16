import React from 'react';
import './modalWindow.css';
import DeleteMovieModalWindow from "../DeleteMovieModalWindow/DeleteMovieModalWindow";
import AddMovieModalWindow from "../AddMovieModalWindow/AddMovieModalWindow";
import EditMovieModalWindow from "../EditMovieModalWindow/EditMovieModalWindow";
import { ContextConsumer } from "../ModalContextProvider/ModalContextProvider";

const MODAL_WINDOW_TYPES = {
    addMovie: <AddMovieModalWindow />,
    editMovie: <EditMovieModalWindow />,
    deleteMovie: <DeleteMovieModalWindow />
}

const ModalWindow = (props) => {
    return (
        <ContextConsumer >
            {({ modalWindowType, closeModal }) => (
                <div className="modal-window">
                    <button onClick={closeModal} className="button">Close</button>
                    {MODAL_WINDOW_TYPES[modalWindowType]}
                </div>
            )}
        </ ContextConsumer >
    )
}

export default ModalWindow;