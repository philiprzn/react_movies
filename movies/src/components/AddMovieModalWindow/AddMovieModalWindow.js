import React, {Component} from "react";
import './addMovieModalWindow.css'
import {connect} from "react-redux";
import {toggleModalWindow} from "../../store/actions/app";
import createMovie from "../../api/createMovie";
import {addMovie} from "../../store/actions/movies";

class AddMovieModalWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const updatedField = event.target.id;
        this.setState({[updatedField]: event.target.value});
    }

    render() {
        const { toggleModalWindow, addMovie } = this.props;

        const newMovie = {
            title: this.state.title,
            description: this.state.description
        };

        return (
            <div className="add-movie-modal-window">
                <h2>Add Movie</h2>

                <form>
                    <div>
                        <label htmlFor='title'>Title:</label>
                        <input id='title' type="text" value={this.state.title} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='description'>Description:</label>
                        <input id='description' type="text" value={this.state.description}
                               onChange={this.handleChange}/>
                    </div>
                </form>
                <div>
                    <button onClick={() => addMovie(createMovie(newMovie))} className="button">Add Movie</button>
                    <button onClick={toggleModalWindow} className="button close-button">Close</button>
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toggleModalWindow: () => dispatch(toggleModalWindow()),
        addMovie: (newMovieData) => dispatch(addMovie(newMovieData)),
    }
};

export default connect(null, mapDispatchToProps)(AddMovieModalWindow);
