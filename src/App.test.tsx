import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { listSpecies } from './api';

jest.mock('./api');

const mockListSpecies = listSpecies as jest.MockedFunction<typeof listSpecies>;

describe('<App/>', () => {
    it('should render a species card', async () => {
        await mockListSpecies.mockResolvedValue([
            {
                name: 'species-name',
                classification: 'classification',
                designation: 'designation',
                language: 'language',
                height: 180,
                numFilms: 5,
                image: 'url/image',
            },
        ]);

        render(<App />);

        await waitFor(() => {
            expect(screen.getByText('species-name')).toBeInTheDocument();
        });
    });

    it('should call listSpecies()', async () => {
        await mockListSpecies.mockResolvedValue([
            {
                name: 'species-name',
                classification: 'classification',
                designation: 'designation',
                language: 'language',
                height: 180,
                numFilms: 5,
                image: 'url/image',
            },
        ]);

        render(<App />);

        await screen.findByText('species-name');

        await waitFor(() => {
            expect(mockListSpecies).toHaveBeenCalled();
        });
    });
});
