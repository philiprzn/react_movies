import React from "react";
import {render, screen} from "@testing-library/react";
import renderer from 'react-test-renderer';

// All bellow works ok;

import Footer from "./Footer";

describe('Footer Testing', () => {

    it('Footer should renders in App', () => {
        const tree = renderer.create(<Footer/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render footer text', () => {
        const { getByText } = render(<Footer />);
        const element = getByText(/footer/i);
        screen.debug();
        expect(element).toBeInTheDocument();
    });
});

/*describe('Footer Testing', () => {
    test('render Footer snapshot', () => {
        const { asFragment } = render(<Footer />);

        expect(asFragment(<Footer/>)).toMatchSnapshot();
    });
})*/
