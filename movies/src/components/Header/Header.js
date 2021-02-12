import React, { useState, useEffect } from 'react';
import './header.css'
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import {connect} from "react-redux";
import {handleFilterChange, toggleModalWindow} from "../../store/actions/app";
import {useLocation} from "react-router-dom";
import History from "../History/History";
import { handleSearchChange } from "../../store/actions/app";
import {asyncGetMovies} from "../../store/actions/movies";

const useQuery = () => new URLSearchParams(useLocation().search);

const Header = (props) => {
    const { app, toggleModalWindow, movies } = props;
    const { profileMenuData, title, searchingValues } = app;
    const payloadData = {
        modalWindowType: 'addMovie'
    }
    
    // console.log('Header searchingValues',searchingValues);

    const [query, setQuery] = useState('');
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        
        // console.log("Header PARAMS", params);
        const q = params.get('q');
        setQuery(q ? q : '/');
    }, []);

    const submitAction = (e) => {
        e.preventDefault();

        setQuery(inputValue);

        History.push(`/search?q=${inputValue}`);

        props.onGetMovies(inputValue);
        setInputValue('');
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div className="header">
            <ProfileMenu profileMenuData={profileMenuData}/>
            <h1>{title}</h1>
            <button onClick={() => toggleModalWindow(payloadData)} className="button">Add movie</button>
            <br/>
            <form onSubmit={submitAction}>
                <div>
                    <input className="search-input" type="text" placeholder="What do you want to watch?" value={inputValue} onChange={handleInputChange}/>
                    <button type="submit">
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
};

function mapStateToProps(state) {
    const { movies, app } = state;

    return { movies, app };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleModalWindow: (type) => dispatch(toggleModalWindow(type)),
        onGetMovies: (value) => dispatch(asyncGetMovies(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
