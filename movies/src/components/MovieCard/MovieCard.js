import React from 'react';
import './movieCard.css';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
    return (
        <div className="moviecard">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
};

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default MovieCard;