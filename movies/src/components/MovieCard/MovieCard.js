import React from 'react';
import './movieCard.css';
import PropTypes from 'prop-types';
import {ContextConsumer} from "../ContextProvider/ContextProvider";

const MovieCard = ({title, description, id }) => {
    return (
        <ContextConsumer >
            {({ app, openModal }) => (
                <div className="moviecard">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div>
                        <button onClick={() => openModal('deleteMovie', {id: id})} className="button">Delete</button>
                        <button onClick={() => openModal('editMovie', {id: id})} className="button">Edit</button>
                    </div>
                </div>
            )}
        </ ContextConsumer >
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

export default MovieCard;