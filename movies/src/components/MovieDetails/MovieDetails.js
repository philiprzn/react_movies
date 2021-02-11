import React from 'react';
import './movieDetails.css'
import {useParams} from "react-router-dom";
import {toggleModalWindow} from "../../store/actions/app";
import {asyncGetMovies} from "../../store/actions/movies";
import {connect} from "react-redux";


const MovieDetails = (props) => {
    let { id } = useParams();
    console.log('MovieDetails movies', props);
    const currentMovie = props.movies.find(movie => movie.id === id);
    
    
    return (
        <div className="movie-details">
            <div className='movie'>
                <div className='movie__logo'>
                    <img src="#" alt="movie-logo"/>
                </div>
                <div className='movie__info'>
                    <div className="movie__header">
                        <h2 className="movie__title">{currentMovie.title}</h2>
                        <p className='movie__rating'>{currentMovie.rating}</p>
                    </div>
                    <p>Oscar winning movie</p>
                    <div className="movie__time">
                        <p>{currentMovie.releaseDate}</p>
                        <p>{currentMovie.duration} min</p>
                    </div>
                    <p className="movie__description">{currentMovie.description}</p>
                    <p className="movie__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                        architecto aut, beatae culpa exercitationem in odit praesentium veniam voluptates voluptatibus!
                        Aperiam aspernatur dicta dolorem ducimus ex exercitationem facere impedit iusto maxime minus
                        neque nobis porro provident recusandae tempore ut, velit voluptatum. A autem blanditiis commodi
                        dolorum excepturi ipsam maxime nemo pariatur porro quia. A consectetur culpa deleniti
                        dignissimos distinctio eligendi, eum exercitationem facere hic labore nisi odit pariatur,
                        perferendis placeat ratione repellat sapiente sequi, velit? Beatae consequatur dolorum esse hic
                        in iste laborum, libero minima nam nesciunt nisi nobis possimus quam quos repellendus
                        repudiandae vel vitae, voluptatum.</p>
                </div>
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    const {movies, app} = state;

    return {movies, app};
};

const mapDispatchToProps = dispatch => {
    return {
        toggleModalWindow: (type) => dispatch(toggleModalWindow(type)),
        onGetMovies: () => dispatch(asyncGetMovies())
    }
};

export default React.memo(connect(mapStateToProps, null)(MovieDetails));