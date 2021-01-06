import React from 'react';

const Button = ({ id, label, handleClick}) => {
    return id ? (
        <button
            onClick={handleClick}>
            {label}
        </button>
    ) : (
        <button onClick={handleClick}>
            {label}
        </button>
    );
};

export default Button;
