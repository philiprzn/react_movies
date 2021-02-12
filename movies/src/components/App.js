import React, {Component, useState, useEffect} from "react";
import './app.css';
import Header from "./../components/Header/Header"
import Footer from "./../components/Footer/Footer"
import ErrorBoundary from "./../components/ErrorBoundary/ErrorBoundary";
import ModalWindow from './../components/ModalWindow/ModalWindow'
import MoviesList from "../containers/MoviesList/MoviesList";
import WithLoading from "../containers/WithLoading/WithLoading";
import { connect } from 'react-redux';
import { addMovie, getMovies }  from './../store/actions/movies';
import { toggleModalWindow }  from './../store/actions/app';
import MovieDetails from "./MovieDetails/MovieDetails";
import NotFound from "./NotFound/NotFound";
import History from "./History/History";
import Search from "./Search/Search";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useParams,
    useLocation,
    Redirect
} from "react-router-dom";

const useQuery = () => new URLSearchParams(useLocation().search);


const App = (props) => {
    const { app, toggleModalWindow, movies } = props;
    const { isModalWindowOpen } = app;

        return (
            <Router history={History}>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            {/*<li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/users">Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/search">Search</NavLink>
                            </li>*/}
                        </ul>
                    </nav>

                    <Switch>
                        {/*<Route exact path="/"><Home /></Route>*/}
                        <Route path="/about"><About /></Route>
                        <Route path="/users"><Users /></Route>
                        <Route path="/user/:id"><User/></Route>
                        <Route exact path="/search"><Search/></Route>
                        <Redirect exact from='/' to='/search' />
                        <Route exact path="/film/:id" render={({location}) =>
                            <>
                                <MovieDetails />
                                <MoviesList />
                            </>}
                        />
                        <Route path="/404">
                            <NotFound />
                        </Route>
                        <Redirect from='*' to='/404' />
                    </Switch>

                    {/*<Header />
                    <MoviesList />*/}
                    {isModalWindowOpen &&  <ModalWindow />}
                    {/*<Footer />*/}
                </div>
            </Router>
        );
};

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function User() {
    let { id } = useParams();
    const user = users.find(user => user.id.toString() === id);

    console.log('user', user);

    return (
        <>
            <h1>ID: { id }</h1>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.gender}</p>
        </>
    )
}

function UsersList({users}) {
    const usersList = users.map(user => {
        return (
            <li key={user.id}>
                <Link to={`/user/${user.id}`}>
                    {user.name}
                </Link>
            </li>
        )
    })

    return <ul>
        {usersList}
    </ul>
}

function Users() {
    const query = useQuery();
    const gender = query.get('gender');
    const age = query.get('age');
    
    console.log('query', query);
    console.log('age', age);

    let filtredUsers = gender ? users.filter(user => user.gender === gender) : users;
    filtredUsers = age ? filtredUsers.filter(user => user.age >= age) : filtredUsers;

    return (
        <>
            <h2>Users</h2>
            <UsersList users={filtredUsers}></UsersList>
        </>
    );
}

const users = [
    {
        id: 1,
        name: 'User1',
        age: 11,
        gender: 'male'
    },
    {
        id: 2,
        name: 'User2',
        age: 22,
        gender: 'female'
    },
    {
        id: 3,
        name: 'User3',
        age: 33,
        gender: 'male'
    },
    {
        id: 4,
        name: 'User4',
        age: 44,
        gender: 'female'
    },
    {
        id: 5,
        name: 'User5',
        age: 55,
        gender: 'male'
    }
];

function mapStateToProps(state) {
    const { movies, app } = state;

    return { movies, app };
};

const mapDispatchToProps = dispatch => {
    return {
        addMovie: (newMovieData) => dispatch(addMovie(newMovieData)),
        toggleModalWindow: () => dispatch(toggleModalWindow()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

{/*<Header openModal={openModal} app={app} profileMenuData={profileMenuData}/>*/}
{/*<ErrorBoundary>
    <MovieList />
</ErrorBoundary>*/}
{/*<ErrorBoundary>
    <MovieListWithLoading isLoading={false} movies={movies} deleteMovie={deleteMovie} editMovie={editMovie} openModal={openModal}/>
</ErrorBoundary>*/}

/*
<div className="app-wrapper">
    <Header />
    <MovieList />
    {isModalWindowOpen &&  <ModalWindow />}
    {/!*<p>Window open: {isModalWindowOpen.toString()}</p>*!/}
    {/!*<button onClick={() => props.addMovie(newMovie)}>AddMovie</button>*!/}
    {/!*<button onClick={toggleModalWindow}>Toggle button</button>*!/}
    {/!*<div>
                    <button onClick={props.onGetMovies}>GET MOVIES</button>
                </div>*!/}
    <pre>{JSON.stringify(props, null, 2)}</pre>
</div>*/
