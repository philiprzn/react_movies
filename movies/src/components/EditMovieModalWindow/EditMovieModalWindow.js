import React, { Component } from "react";
import './editMovieModalWindow.css'
import {ContextConsumer} from "../ModalContextProvider/ModalContextProvider";

export default class EditMovieModalWindow extends Component {
    constructor(props) {
        super(props);
        // const { currentMovie } = this.props;
        // const { title, description } = currentMovie;

        this.state = {
            title: '',
            description: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetValues = this.resetValues.bind(this);

        console.log('EditMovieModalWindow 19', this.props)
    }

    handleChange(event) {
        const updatedField = event.target.id;
        this.setState({ [updatedField]: event.target.value});
    }

    handleSubmit(event) {
        console.log('Отправленное имя: ' + this.state.title + this.state.description);
        event.preventDefault();
    }

    resetValues() {
        this.setState({
            title: '',
            description: ''
        })
    }

    render() {
        const {closeModal, editMovie} = this.props;

        return (
            <ContextConsumer >
                {({ app, closeModal }) => (
                    <div className="edit-movie-modal-window">
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
                            <button onClick={closeModal} className="button">Delete Movie</button>
                            <button onClick={closeModal} className="button close-button">Close</button>
                        </div>
                    </div>
                )}
            </ContextConsumer>
        )
    }
};