import React from 'react';
import './movieCard.css';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const MovieCard = (props) => {
    const { title, description, id, rating, releaseDate, toggleModalWindow } = props;

    const deleteData = {
        modalWindowType: 'deleteMovie',
        calledMovieId: id
    };
    const editData = {
        modalWindowType: 'editMovie',
        editedMovieData: {
            id,
            title,
            description,
            rating,
            releaseDate
        }
    };

    return (
        <div className="moviecard">
            <Link to={`/film/${id}`}>
                <h3>{title}</h3>
            </Link>
            <p>{description}</p>
            <p>Rating: {rating}</p>
            <p>Release Date: {releaseDate}</p>
            <div>
                <button onClick={() => toggleModalWindow(deleteData)} className="button">Delete</button>
                <button onClick={() => toggleModalWindow(editData)} className="button">Edit</button>
            </div>
        </div>
    )
};

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

MovieCard.defaultProps = {
    title: 'Just a perfect Movie',
    description: 'Cool description',
}

export default React.memo(MovieCard);