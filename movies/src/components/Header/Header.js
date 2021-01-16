import React from 'react';
import './header.css'
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import {ContextConsumer} from "../ModalContextProvider/ModalContextProvider";

const Header = (props) => {
    return (
        <ContextConsumer >
            {({ title, profileMenuData, openModal }) => (
                <div className="header">
                    <ProfileMenu profileMenuData={profileMenuData}/>
                    <h1>{title}</h1>
                    <button onClick={() => openModal('addMovie')} className="button">Add movie</button>
                </div>
            )}
        </ ContextConsumer >
    )
};

export default Header;