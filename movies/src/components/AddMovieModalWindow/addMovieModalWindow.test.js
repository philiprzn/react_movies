import React from "react";
import {render, screen} from "@testing-library/react";
import renderer from 'react-test-renderer';
import AddMovieModalWindow from "./AddMovieModalWindow";

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('AddMovieModalWindow testing', () => {
    it('AddMovieModalWindow should render in App', function () {
        const tree = renderer.create(<AddMovieModalWindow/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('AddMovieModalWindow should contain text', function () {
        const { getByText } = render(<AddMovieModalWindow />);
        const element = getByText(/add movie/i);
        // screen.debug();
        expect(element).toBeInTheDocument();
    });

    it('AddMovieModalWindow should contain close button', function () {
        const { getByText } = render(<AddMovieModalWindow />);
        const button = getByText(/close/i);
        // screen.debug();
        expect(button).toBeInTheDocument();
        expect(button).toBeTruthy();
    });

    it('AddMovieModalWindow should contain placeholder with current text', function () {
        const { getByPlaceholderText } = render(<AddMovieModalWindow />);
        const placeholder = getByPlaceholderText(/type title here/i);
        // screen.debug();
        expect(placeholder).toBeInTheDocument();
    });
})