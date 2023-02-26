import { render, screen } from '@testing-library/react';
import Species, { SpeciesProps } from './Species';

describe('<Species/>', () => {

    let props: SpeciesProps;

    beforeEach(() => {
        props = {
            name: 'name',
            classification: 'classification',
            designation: 'designation',
            language: 'language',
            height: '180',
            numFilms: 5,
            image: 'url/image'
        };
    });

    it('should render without breaking', () => {

        render(<Species {...props}/>);

        expect(screen.getByAltText('name')).toBeInTheDocument();
    });

    it('should render N/A for height when height=n/a', () => {

        render(<Species {...props} height="n/a"/>);

        expect(screen.getByText('n/a')).toBeInTheDocument();
    });

    it('should render height in inches', () => {

        render(<Species {...props} height="180"/>);

        expect(screen.getByText('71″')).toBeInTheDocument();
    });
});