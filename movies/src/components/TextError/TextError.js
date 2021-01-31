import React from 'react';
import './textError.css';

function TextError(props) {
    return (
        <p className='error'>
            {props.children}
        </p>
    )
};

export default TextError;