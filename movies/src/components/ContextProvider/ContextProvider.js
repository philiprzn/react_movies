import React, { Component } from "react";
import { INITIAL_STATE } from "../../initialState";

const { Provider, Consumer } = React.createContext();

class ContextProvider extends Component {
    constructor(props) {
        super(props);
        const { movies, app } = INITIAL_STATE;
        this.state = {
            movies,
            app
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(type, params) { // types, params
        console.log('openModal', type)

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
        console.log('ContextProvider state', this.state)

        return (
            <Provider value={{...this.state, openModal: this.openModal,  closeModal: this.closeModal}}>
                {this.props.children}
            </Provider>
        );
    }
}

export  { ContextProvider, Consumer as ContextConsumer };