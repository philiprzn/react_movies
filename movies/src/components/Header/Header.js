import React from 'react';
import './header.css'
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import {ContextConsumer} from "../ContextProvider/ContextProvider";

const Header = (props) => {
    return (
        <ContextConsumer >
            {({ app, openModal }) => (
                <div className="header">
                    <ProfileMenu profileMenuData={app.profileMenuData}/>
                    <h1>{app.title}</h1>
                    <button onClick={() => openModal('addMovie')} className="button">Add movie</button>
                </div>
            )}
        </ ContextConsumer >
    )
};

export default Header;