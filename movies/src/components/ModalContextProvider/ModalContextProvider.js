import React, { Component } from "react";
import { INITIAL_STATE } from "../../initialState";

const { Provider, Consumer } = React.createContext();

class ModalContextProvider extends Component {
    constructor(props) {
        super(props);
        const { app } = INITIAL_STATE;
        this.state = {
            app
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(type, params) { // types, params
        this.setState((state) => ({
            app: {
                isModalOpen: true,
                modalWindowType: type
            }
        }));
    };

    closeModal() {
        this.setState((state) => ({
            app: {
                isModalOpen: false
            }
        }));
    };

    render() {
        return (
            <Provider value={{...this.state, openModal: this.openModal,  closeModal: this.closeModal}}>
                {this.props.children}
            </Provider>
        );
    }
}

export  { ModalContextProvider, Consumer as ContextConsumer };