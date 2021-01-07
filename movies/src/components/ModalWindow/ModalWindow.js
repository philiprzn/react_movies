import React from 'react';
import './modalWindow.css';
import DeleteMovieModalWindow from "../DeleteMovieModalWindow/DeleteMovieModalWindow";
import AddMovieModalWindow from "../AddMovieModalWindow/AddMovieModalWindow";
import EditMovieModalWindow from "../EditMovieModalWindow/EditMovieModalWindow";
import { ContextConsumer } from "../ContextProvider/ContextProvider";

const MODAL_WINDOW_TYPES = {
    addMovie: <AddMovieModalWindow />,
    editMovie: <EditMovieModalWindow />,
    deleteMovie: <DeleteMovieModalWindow />
}

const ModalWindow = (props) => {
    return (
        <ContextConsumer >
            {({ app, closeModal }) => (
                <div className="modal-window">
                    <button onClick={closeModal} className="button">Close</button>
                    {MODAL_WINDOW_TYPES[app.modalWindowType]}
                </div>
            )}
        </ ContextConsumer >
    )
}

export default ModalWindow;