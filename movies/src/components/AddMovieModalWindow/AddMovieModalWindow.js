import React, {Component} from "react";
// import './addMovieModalWindow.css';
import {connect} from "react-redux";
import {toggleModalWindow} from "../../store/actions/app";
import createMovie from "../../api/createMovie";
import {addMovie} from "../../store/actions/movies";
import { useField, Form, Formik } from "formik";
import { validationSchema } from "../../api/formik/validationSchema";

const TextField = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <>
            {/*<label data-testId={props["data-testid"]}>{label}</label>*/}
            <label testid={props["testid"]}>{label}</label>
            <br/>
            <input {...field} {...props} />
            <br/>
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
            <br/>
        </>
    );
};

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
                {(props) => (
                    <Form data-testid="addMovieForm">
                        <TextField data-testid="textField" name="title" type="text" label="Title" placeholder='type title here'/>
                        <TextField data-testid="textField" name="description" type="text" label="Description" />
                        <TextField data-testid="textField" name="releaseDate" type="text" label="ReleaseDate" />
                        <button type="submit" className="button">Submit</button>
                        <button onClick={toggleModalWindow} className="button close-button">Close</button>
                    </Form>
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

// export default connect(null, mapDispatchToProps)(AddMovieModalWindow);
export default AddMovieModalWindow;

/*<>
<div>
    <label htmlFor='title'>Title: *</label><br/>
    <input id='title'
           type="text"
           value={props.values.title}
           onChange={props.handleChange}
           onBlur={props.handleBlur}
    />
</div>
{props.touched.title && props.errors.title && <p className={'error'}>{props.errors.title}</p>}
<br/>
<div>
    <label htmlFor='description'>Description: *</label><br/>
    <input id='description'
           type="text"
           value={props.values.description}
           onChange={props.handleChange}
           onBlur={props.handleBlur}
    />
</div>
{props.touched.description && props.errors.description && <p className={'error'}>{props.errors.description}</p>}
<br/>
<div>
    <label htmlFor='releaseDate'>Release Date: *</label><br/>
    <input id='releaseDate'
           type="text"
           value={props.values.releaseDate}
           onChange={props.handleChange}
           onBlur={props.handleBlur}
    />
</div>
{props.touched.releaseDate && props.errors.releaseDate && <p className={'error'}>{props.errors.releaseDate}</p>}
<br/>
<p>* - Required</p>
<div>
    <button disabled={ !props.dirty || !props.isValid } onClick={props.handleSubmit} type={'submit'} className="button">Add Movie</button>
    <button onClick={toggleModalWindow} className="button close-button">Close</button>
    {/!*<pre>{JSON.stringify(props, null, 2)}</pre>*!/}
</div>
</>*/