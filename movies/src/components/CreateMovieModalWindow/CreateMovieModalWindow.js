import React, { Component } from "react";
import './createMovieModalWindow.css'

export default class CreateMovieModalWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const updatedField = event.target.id;
        this.setState({ [updatedField]: event.target.value});
    }

    handleSubmit(event) {
        console.log('Отправленное имя: ' + this.state.title + this.state.description);
        event.preventDefault();
    }

    render() {
        const {closeModal, deleteMovie, createMovie} = this.props;

        return (
            <div className="create-movie-modal-window">
                <h2>Add Movie</h2>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='title'>Title:</label>
                        <input id='title' type="text" value={this.state.title} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor='description'>Description:</label>
                        <input id='description' type="text" value={this.state.description} onChange={this.handleChange} />
                    </div>

                    <input type="submit" value="Submit" />
                </form>

                <div>
                    <button onClick={() => createMovie(this.state)} className="button">Create Movie</button>
                    <button onClick={closeModal} className="button close-button">Close</button>
                </div>
            </div>
        )
    }
};