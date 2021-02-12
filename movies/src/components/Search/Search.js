import React, { useState } from 'react';
import Header from "../Header/Header";
import MoviesList from "../../containers/MoviesList/MoviesList";

function Search(props) {

    const [] = useState('');

    return (
        <>
            <Header/>
            <MoviesList />
        </>
    );
}

export default Search;