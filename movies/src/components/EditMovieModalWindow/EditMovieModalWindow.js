import React, {Component, useState, useEffect} from "react";
import './editMovieModalWindow.css'
import {toggleModalWindow} from "../../store/actions/app";
import { editMovie } from "../../store/actions/movies";
import {connect} from "react-redux";
import TextError from "../TextError/TextError";
import {Formik, Form, Field, ErrorMessage, useFormik} from "formik";
import { validationSchema } from "../../api/formik/validationSchema";

function EditMovieModalWindow (props) {
    const {app, editMovie, toggleModalWindow} = props;
    const {movieToEdit} = app;
    const [title, setTitle] = useState(movieToEdit.title);
    const [description, setDescription] = useState(movieToEdit.description);
    const [releaseDate, setReleaseDate] = useState(movieToEdit.releaseDate);

    const initialValues = {
        id: movieToEdit.id,
        title,
        description,
        releaseDate
    };

    const onSubmit = values => handleSubmit(values);

    const handleSubmit = (values) => {
        editMovie(values);
        toggleModalWindow();
        values.preventDefault();
    }

    const resetValues =(e) => {
        setTitle('');
        setDescription('');
        setReleaseDate('');

        e.preventDefault();
    }

    return (
        <div className="edit-movie-modal-window">
            <h2>Edit Movie</h2>

            <Formik initialValues={formValues || initialValues}
                    validateOnBlur
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize
            >
                {(formik) => (
                    <Form>
                        <div>
                            <label htmlFor='title'>Title: *</label><br/>
                            <Field id='title' type="text" name='title'/>
                        </div>
                        <ErrorMessage name='title' component={TextError}/>
                        <br/>
                        <div>
                            <label htmlFor='description'>Description: *</label><br/>
                            <Field id='description' type="text" name='description'/>
                        </div>
                        <ErrorMessage name='description' component={TextError}/>
                        <br/>
                        <div>
                            <label htmlFor='releaseDate'>Release Date: *</label><br/>
                            <Field id='releaseDate' type="text" name='releaseDate'/>
                        </div>
                        <ErrorMessage name='releaseDate' component={TextError}/>
                        <br/>
                        <div>
                            <button disabled={ !formik.dirty || !formik.isValid }
                                    onClick={formik.handleSubmit}
                                    type={'submit'}
                                    className="button">Apply changes</button>
                            <button onClick={resetValues} className="button">Reset</button>
                            <button onClick={toggleModalWindow} className="button close-button">Close</button>
                            <pre>{JSON.stringify(formik, null, 2)}</pre>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
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