import React from 'react';
import Header from "../Header/Header";
import MoviesList from "../../containers/MoviesList/MoviesList";

function Search(props) {

    return (
        <>
            <Header/>
            <MoviesList />
        </>
    );
}

export default Search;