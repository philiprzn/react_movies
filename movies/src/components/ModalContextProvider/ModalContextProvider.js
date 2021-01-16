import React, {Component, useState, useEffect, useMemo, useCallback} from "react";
import {INITIAL_STATE} from "../../initialState";
import useToggle from "../../customHooks/useToggle/useToggle";

const {Provider, Consumer} = React.createContext();

function ModalContextProvider(props) {

    const {app} = INITIAL_STATE;
    const [application, setApplication] = useState(app);
    const [isModalWindowOpen, toggleModalWindow] = useToggle(false);

    const openModal = (type, params) => { // types, params
        setApplication({...application, modalWindowType: type})
        toggleModalWindow();
    };

    const closeModal = () => {
        toggleModalWindow();
    };

    return (
        <Provider value={{...application, openModal, closeModal, isModalWindowOpen}}>
            {props.children}
        </Provider>
    );
}

export {ModalContextProvider, Consumer as ContextConsumer};