import React from 'react';
import './movieCard.css';
import PropTypes from 'prop-types';
import {toggleModalWindow} from "../../store/actions/app";
import {connect} from "react-redux";

const MovieCard = (props) => {
    const { title, description, id, rating, toggleModalWindow } = props;
    const deleteData = {
        modalWindowType: 'deleteMovie',
        calledMovieId: id
    }

    const editData = {
        modalWindowType: 'editMovie',
        editedMovieData: {
            id,
            title,
            description,
            rating
        }
    }

    return (
        <div className="moviecard">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{rating}</p>
            <div>
                <button onClick={() => toggleModalWindow(deleteData)} className="button">Delete</button>
                <button onClick={() => toggleModalWindow(editData)} className="button">Edit</button>
            </div>
        </div>
    )
};

/*<div className="moviecard">
    <h3>{title}</h3>
    <p>{description}</p>

    <div>
        <button className="button"
                id={id}
                deleteMovie={deleteMovie}
                onClick={() => openModal(id)}
        >Delete</button>
        <button className="button" editMovie={editMovie} onClick={() => openModal('edit', {id: id})}>Edit</button>
    </div>
</div>*/

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

MovieCard.defaultProps = {
    title: 'Just a perfect Movie',
    description: 'Cool description',
}

function mapStateToProps(state) {
    const { movies, app } = state;

    return { movies, app };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleModalWindow: (type) => dispatch(toggleModalWindow(type)),
    }
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(MovieCard));