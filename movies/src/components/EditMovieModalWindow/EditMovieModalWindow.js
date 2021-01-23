import React, {Component} from "react";
import './editMovieModalWindow.css'
import {ContextConsumer} from "../ModalContextProvider/ModalContextProvider";
import {toggleModalWindow} from "../../store/actions/app";
import { editMovie } from "../../store/actions/movies";
import {connect} from "react-redux";
import createMovie from "../../api/createMovie";

class EditMovieModalWindow extends Component {
    constructor(props) {
        super(props);

        const {app, editMovie} = this.props;
        const {movieToEdit} = app;

        console.log('EditMovieModalWindow data 15 ====', this.props);

        this.state = {
            title: movieToEdit.title,
            description: movieToEdit.description,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetValues = this.resetValues.bind(this);
    }

    handleChange(event) {
        const updatedField = event.target.id;
        this.setState({[updatedField]: event.target.value});
    }

    handleSubmit(event) {
        console.log('Измененные данные: ' + this.state.title + this.state.description);
        event.preventDefault();
    }

    resetValues() {
        this.setState({
            title: '',
            description: ''
        })
    }


    render() {
        const {toggleModalWindow, editMovie, app} = this.props;
        const {movieToEdit} = app;

        const updatedMovie = {
            id: movieToEdit.id,
            title: this.state.title,
            description: this.state.description,
        };

        return (
            <div className="edit-movie-modal-window">
                <h2>Add Movie</h2>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='title'>Title:</label>
                        <input id='title' type="text" value={this.state.title} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='description'>Description:</label>
                        <input id='description' type="text" value={this.state.description}
                               onChange={this.handleChange}/>
                    </div>

                    <input type="submit" value="Submit"/>
                </form>
                <div>
                    <button onClick={() => editMovie(updatedMovie)} className="button">Apply changes</button>
                    <button onClick={this.resetValues} className="button">Reset</button>
                    <button onClick={toggleModalWindow} className="button close-button">Close</button>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    const {movies, app} = state;

    return {movies, app};
};

const mapDispatchToProps = dispatch => {
    return {
        toggleModalWindow: () => dispatch(toggleModalWindow()),
        editMovie: (updatedMovieData) => dispatch(editMovie(updatedMovieData)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMovieModalWindow);