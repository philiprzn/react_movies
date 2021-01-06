import React from 'react';
import './movieCard.css';
import PropTypes from 'prop-types';

const MovieCard = ({title, description, deleteMovie, openModal, id, editMovie }) => {
    return (
        <div className="moviecard">
            <h3>{title}</h3>
            <p>{description}</p>

            <div>
                <button className="button"
                        id={id}
                        deleteMovie={deleteMovie}
                        onClick={() => openModal(id)}
                >Delete</button>
                <button className="button" onClick={() => openModal(id)}>Edit</button>
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

export default MovieCard;