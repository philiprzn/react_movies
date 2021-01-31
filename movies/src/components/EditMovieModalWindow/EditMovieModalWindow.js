import React, {Component, useState, useEffect} from "react";
import './editMovieModalWindow.css'
import {ContextConsumer} from "../ModalContextProvider/ModalContextProvider";
import {toggleModalWindow} from "../../store/actions/app";
import { editMovie } from "../../store/actions/movies";
import {connect} from "react-redux";

import {Formik} from "formik";
import { validationSchema } from "../../api/formik/validationSchema";

function EditMovieModalWindow (props) {

    const {app, editMovie, toggleModalWindow} = props;
    const {movieToEdit} = app;

    const [title, setTitle] = useState(movieToEdit.title);
    const [description, setDescription] = useState(movieToEdit.description);
    const [releaseDate, setReleaseDate] = useState(movieToEdit.releaseDate);

    console.log('movieToEdit title===', title);


/*
    const handleChange = (event) => {
        const updatedField = event.target.id;
        setState({[updatedField]: event.target.value});
    }
*/

    const handleSubmit = (values) => {
        editMovie(values);
        toggleModalWindow();
        values.preventDefault();
    }

    const resetValues =(e) => {
        console.log('resetValues !!!');

        e.preventDefault();
    }

    return (
        <div className="edit-movie-modal-window">
            <h2>Edit Movie</h2>

            <Formik initialValues={{
                id: movieToEdit.id,
                title: title,
                description: description,
                releaseDate: releaseDate
            }}
                    validateOnBlur
                    onSubmit={values => handleSubmit(values)}
                    validationSchema={validationSchema}
            >
                {(formik) => (
                    <>
                        <div>
                            <label htmlFor='title'>Title: *</label><br/>
                            <input id='title'
                                   type="text"
                                   value={formik.values.title}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.title && formik.errors.title && <p className={'error'}>{formik.errors.title}</p>}
                        <br/>
                        <div>
                            <label htmlFor='description'>Description: *</label><br/>
                            <input id='description'
                                   type="text"
                                   value={formik.values.description}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.description && formik.errors.description && <p className={'error'}>{formik.errors.description}</p>}
                        <br/>
                        <div>
                            <label htmlFor='releaseDate'>Release Date: *</label><br/>
                            <input id='releaseDate'
                                   type="text"
                                   value={formik.values.releaseDate}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.releaseDate && formik.errors.releaseDate && <p className={'error'}>{formik.errors.releaseDate}</p>}
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

                    </>
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