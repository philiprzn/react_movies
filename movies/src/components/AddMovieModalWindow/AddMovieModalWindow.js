import React, {Component} from "react";
import './addMovieModalWindow.css'
import {connect} from "react-redux";
import {toggleModalWindow} from "../../store/actions/app";
import createMovie from "../../api/createMovie";
import {addMovie} from "../../store/actions/movies";
import {Formik} from "formik";
import { validationSchema } from "../../api/formik/validationSchema";

function AddMovieModalWindow (props) {
    const {toggleModalWindow, addMovie} = props;

    const handleSubmit = (values) => {
        addMovie(createMovie(values));
        toggleModalWindow();
    }

    return (
        <div className="add-movie-modal-window">
            <h2>Add Movie</h2>

            <Formik initialValues={{
                        title: '',
                        description: '',
                        releaseDate: ''
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
                        <p>* - Required</p>
                        <div>
                            <button disabled={ !formik.dirty || !formik.isValid } onClick={formik.handleSubmit} type={'submit'} className="button">Add Movie</button>
                            <button onClick={toggleModalWindow} className="button close-button">Close</button>
                            {/*<pre>{JSON.stringify(formik, null, 2)}</pre>*/}
                        </div>
                    </>
                )}
            </Formik>
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        toggleModalWindow: () => dispatch(toggleModalWindow()),
        addMovie: (newMovieData) => dispatch(addMovie(newMovieData)),
    }
};

export default connect(null, mapDispatchToProps)(AddMovieModalWindow);