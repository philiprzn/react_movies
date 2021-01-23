import React from 'react';
import './header.css'
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import {connect} from "react-redux";
import {toggleModalWindow} from "../../store/actions/app";

const Header = (props) => {
    const { app, toggleModalWindow } = props;
    const { profileMenuData, title } = app;
    const payloadData = {
        modalWindowType: 'addMovie'
    }

    return (
        <div className="header">
            <ProfileMenu profileMenuData={profileMenuData}/>
            <h1>{title}</h1>
            <button onClick={() => toggleModalWindow(payloadData)} className="button">Add movie</button>
        </div>
    )
};

function mapStateToProps(state) {
    const { movies, app } = state;

    return { movies, app };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleModalWindow: (type) => dispatch(toggleModalWindow(type)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
