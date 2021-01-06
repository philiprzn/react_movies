import React from 'react';
import './header.css'
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const Header = (props) => {
    const { openModal, app } = props;
    const { title, profileMenuData } = app;
    return (
        <div className="header">
            <ProfileMenu profileMenuData={profileMenuData}/>
            <h1>{title}</h1>
            <button onClick={openModal} className="button">Add movie</button>
        </div>
    )
};

export default Header;