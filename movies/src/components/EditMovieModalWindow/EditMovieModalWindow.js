import React, {Component, useState, useEffect} from "react";
import './editMovieModalWindow.css'
import {ContextConsumer} from "../ModalContextProvider/ModalContextProvider";
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
        console.log('resetValues !!!');

        e.preventDefault();
    }

    return (
        <div className="edit-movie-modal-window">
            <h2>Edit Movie</h2>

            <Formik initialValues={initialValues}
                    validateOnBlur
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
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


/*
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
</Formik>*/

/*<form onSubmit={formik.handleSubmit}>
    <div>
        <label htmlFor='title'>Title:</label><br/>
        <input id='title' name='title' type="text"
               {...formik.getFieldProps('title')}
        />
    </div>
    {formik.errors.title && <p className='error'>{formik.errors.title}</p>}
    <br/>
    <div>
        <label htmlFor='description'>Description:</label><br/>
        <input id='description' name='description' type="text"
               {...formik.getFieldProps('description')}
        />
    </div>
    {formik.errors.description && <p className='error'>{formik.errors.description}</p>}
    <br/>
    <div>
        <label htmlFor='releaseDate'>Release Date: *</label><br/>
        <input id='releaseDate'
               type="text"
            /!*value={formik.values.releaseDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}*!/
               {...formik.getFieldProps('releaseDate')}
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
</form>*/
