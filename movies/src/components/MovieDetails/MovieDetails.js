import React from 'react';
import './movieDetails.css'


const MovieDetails = (props) => {
    return (
        <div className="movie-details">
            <h1>Movie Details</h1>
            <div className='movie'>
                <div className='movie__logo'>
                    <img src="#" alt="movie-logo"/>
                </div>
                <div className='movie__info'>
                    <div className="movie__header">
                        <h2 className="movie__title">Movie1-2014</h2>
                        <p className='movie__rating'>9.2</p>
                    </div>
                    <p>Oscar winning movie</p>
                    <div className="movie__time">
                        <p>1994</p>
                        <p>154 min</p>
                    </div>
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

export default MovieDetails;