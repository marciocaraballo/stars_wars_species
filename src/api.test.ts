import { listSpecies } from './api';

const unmockedFetch = global.fetch;

describe('listSpecies()', () => {
    let mockedFetch: jest.Mock;

    beforeEach(() => {
        jest.resetAllMocks();

        mockedFetch = jest.fn();

        mockedFetch.mockResolvedValueOnce({
            json: () =>
                Promise.resolve({
                    title: 'The Empire Strikes Back',
                    episode_id: 5,
                    opening_crawl:
                        'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....',
                    director: 'Irvin Kershner',
                    producer: 'Gary Kurtz, Rick McCallum',
                    release_date: '1980-05-17',
                    characters: ['https://swapi.dev/api/people/1/'],
                    planets: ['https://swapi.dev/api/planets/4/'],
                    starships: ['https://swapi.dev/api/starships/3/'],
                    vehicles: ['https://swapi.dev/api/vehicles/8/'],
                    species: [
                        'https://swapi.dev/api/species/1/',
                        'https://swapi.dev/api/species/2/',
                    ],
                    created: '2014-12-12T11:26:24.656000Z',
                    edited: '2014-12-15T13:07:53.386000Z',
                    url: 'https://swapi.dev/api/films/2/',
                }),
            ok: 'OK',
        });

        mockedFetch.mockResolvedValueOnce({
            json: () =>
                Promise.resolve({
                    name: 'human',
                    classification: 'classification',
                    designation: 'designation',
                    average_height: '180',
                    films: ['film-1', 'film-2'],
                    language: 'language',
                }),
            ok: 'OK',
        });

        mockedFetch.mockResolvedValueOnce({
            json: () =>
                Promise.resolve({
                    name: 'droid',
                    classification: 'classification',
                    designation: 'designation',
                    average_height: '180',
                    films: ['film-1', 'film-2', 'film-3'],
                    language: 'language',
                }),
            ok: 'OK',
        });
    });

    it('should call fetch() with expected params for GET /film API', async () => {
        global.fetch = mockedFetch;

        await listSpecies();

        expect(global.fetch).toHaveBeenNthCalledWith(
            1,
            'https://swapi.dev/api/films/2/',
            { headers: { 'Content-Type': 'application/json' }, method: 'GET' }
        );
    });

    it('should call fetch() with expected params for GET /species/1 API', async () => {
        global.fetch = mockedFetch;

        await listSpecies();

        expect(global.fetch).toHaveBeenNthCalledWith(
            2,
            'https://swapi.dev/api/species/1/',
            { headers: { 'Content-Type': 'application/json' }, method: 'GET' }
        );
    });

    it('should call fetch() with expected params for GET /species/2 API', async () => {
        global.fetch = mockedFetch;

        await listSpecies();

        expect(global.fetch).toHaveBeenNthCalledWith(
            3,
            'https://swapi.dev/api/species/2/',
            { headers: { 'Content-Type': 'application/json' }, method: 'GET' }
        );
    });

    it('should return species results', async () => {
        global.fetch = mockedFetch;

        const result = await listSpecies();

        expect(result).toEqual([
            {
                classification: 'classification',
                designation: 'designation',
                height: '180',
                image: 'https://static.wikia.nocookie.net/starwars/images/3/3f/HumansInTheResistance-TROS.jpg',
                language: 'language',
                name: 'human',
                numFilms: 2,
            },
            {
                classification: 'classification',
                designation: 'designation',
                height: '180',
                image: 'https://static.wikia.nocookie.net/starwars/images/f/fb/Droid_Trio_TLJ_alt.png',
                language: 'language',
                name: 'droid',
                numFilms: 3,
            },
        ]);
    });

    afterAll(() => {
        global.fetch = unmockedFetch;
    });
});
