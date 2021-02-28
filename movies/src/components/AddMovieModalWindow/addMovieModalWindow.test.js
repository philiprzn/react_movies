import React from "react";
import {render, screen, within, fireEvent, waitFor} from "@testing-library/react";
import renderer from 'react-test-renderer';
import AddMovieModalWindow from "./AddMovieModalWindow";
// import "@babel/polyfill";

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('AddMovieModalWindow testing', () => {
    it('AddMovieModalWindow should render in App', function () {
        const tree = renderer.create(<AddMovieModalWindow/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('AddMovieModalWindow renders a <TextField />', () => {
        const { getAllByTestId, getByTestId } = render(<AddMovieModalWindow />);
        const addMovieForm = getByTestId('addMovieForm');
        const textFieldsInForm = within(addMovieForm).getAllByTestId('textField');
        expect(textFieldsInForm.length).toBe(3);
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

    test('rendering and submitting a basic Formik form', async () => {
        const handleSubmit = jest.fn()
        render(<AddMovieModalWindow onSubmit={handleSubmit} />)

        userEvent.type(screen.getByLabelText(/title/i), 'Any Title')
        userEvent.type(screen.getByLabelText(/description/i), 'Any Description')
        userEvent.type(screen.getByLabelText(/releaseDate/i), '123')

        userEvent.click(screen.getByRole('button', { name: /submit/i }))

        await waitFor(() =>

            expect(handleSubmit).toHaveBeenCalledWith({
                title: 'Any Title',
                description: 'Any Description',
                releaseDate: '123',
            }, expect.anything())
        )
    })

    it('submits correct values', async () => {
        const { container } = render(<AddMovieModalWindow />)
        const title = container.querySelector('input[name="title"]')
        const description = container.querySelector('input[name="description"]')
        const releaseDate = container.querySelector('input[name="releaseDate"]')
        const submit = container.querySelector('button[type="submit"]')
        const results = container.querySelector("textarea");

        await waitFor(() => {
            fireEvent.change(title, {
                target: {
                    value: "mocktitle"
                }
            })
        })

        await waitFor(() => {
            fireEvent.change(description, {
                target: {
                    value: "mockdescription"
                }
            })
        })

        await waitFor(() => {
            fireEvent.change(releaseDate, {
                target: {
                    value: "mockreleaseDate"
                }
            })
        })

        await waitFor(() => {
            fireEvent.click(submit)
        })

        screen.debug();
        // screen.getByTestId('textArea')

        expect(results.value).toBe(
            '{"title":"mocktitle","description":"mockdescription","releaseDate":"mockreleaseDate"}'
        )
    })
})