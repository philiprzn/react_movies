import React from 'react';
import './header.css'

const Header = (props) => {
    const { openModal } = props;
    return (
        <>
            <div className="header">
                <h1>Header</h1>
                <button onClick={openModal} className="button">Add movie</button>
            </div>
        </>
    )
};

export default Header;