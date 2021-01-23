import React from 'react';
import './modalWindow.css';
import DeleteMovieModalWindow from "../DeleteMovieModalWindow/DeleteMovieModalWindow";
import AddMovieModalWindow from "../AddMovieModalWindow/AddMovieModalWindow";
import EditMovieModalWindow from "../EditMovieModalWindow/EditMovieModalWindow";
import {connect} from "react-redux";
import {toggleModalWindow} from "../../store/actions/app";
// import { ContextConsumer } from "../ModalContextProvider/ModalContextProvider";

const MODAL_WINDOW_TYPES = {
    addMovie: <AddMovieModalWindow/>,
    editMovie: <EditMovieModalWindow/>,
    deleteMovie: <DeleteMovieModalWindow/>
}

const ModalWindow = (props) => {
    const { app, toggleModalWindow } = props;
    const { modalWindowType } = app;

    return (
        <div className="modal-window">
            <button onClick={toggleModalWindow} className="button">Close</button>
            {MODAL_WINDOW_TYPES[modalWindowType]}
        </div>
    )
}

function mapStateToProps(state) {
    const { movies, app } = state;

    return { movies, app };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleModalWindow: () => dispatch(toggleModalWindow()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);