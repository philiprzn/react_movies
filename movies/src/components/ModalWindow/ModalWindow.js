import React from 'react';
import './modalWindow.css';
import DeleteModalWindow from "../DeleteModalWindow/DeleteModalWindow";
import CreateMovieModalWindow from "../CreateMovieModalWindow/CreateMovieModalWindow";
import EditMovieModalWindow from "../EditMovieModalWindow/EditMovieModalWindow";

const ModalWindow = (props) => {
    const { closeModal, deleteMovie, calledMovieId, createMovie, editMovie, title, description} = props;
    return (
        <>
            <div className="modal-window">
                {/*<DeleteModalWindow calledMovieId={calledMovieId}
                                   deleteMovie={() => deleteMovie(calledMovieId)}
                                   closeModal={closeModal}
                />*/}
                {/*<CreateMovieModalWindow closeModal={closeModal} createMovie={createMovie}/>*/}
                <EditMovieModalWindow title={title} description={description} closeModal={closeModal}/>
            </div>
        </>
    )
};

export default ModalWindow;