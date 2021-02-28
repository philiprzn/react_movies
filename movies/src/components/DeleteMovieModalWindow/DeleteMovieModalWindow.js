import React from "react";
import './deleteMovieModalWindow.css'
import {toggleModalWindow} from "../../store/actions/app";
import {deleteMovie} from "../../store/actions/movies";
import {connect} from "react-redux";

const DeleteMovieModalWindow = (props) => {
    const { app, toggleModalWindow, deleteMovie } = props;

    const handleDelete = () => {
        deleteMovie(app.calledMovieId);
        toggleModalWindow();
    };

    return (
        <div className="delete-modal-window">
            <button onClick={handleDelete} className="button">Delete Movie</button>
            <button onClick={toggleModalWindow} className="button close-button">Close</button>
        </div>
    )
};

function mapStateToProps (state)  {
    const { movies, app } = state;

    return { movies, app };
};

const mapDispatchToProps = dispatch => {

    return {
        toggleModalWindow: () => dispatch(toggleModalWindow()),
        deleteMovie: (movieId) => dispatch(deleteMovie(movieId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMovieModalWindow);