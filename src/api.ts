import {
    IFilmResponse,
    ISpeciesResponse,
    ISpecies,
    ISpeciesImages,
} from './types';

const API_URL = 'https://swapi.dev/api/films/2/';

const SPECIES_IMAGES: ISpeciesImages = {
    droid: 'https://static.wikia.nocookie.net/starwars/images/f/fb/Droid_Trio_TLJ_alt.png',
    human: 'https://static.wikia.nocookie.net/starwars/images/3/3f/HumansInTheResistance-TROS.jpg',
    trandoshan:
        'https://static.wikia.nocookie.net/starwars/images/7/72/Bossk_full_body.png',
    wookie: 'https://static.wikia.nocookie.net/starwars/images/1/1e/Chewbacca-Fathead.png',
    yoda: 'https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png',
};

/**
 * Small utility to work with browser's fetch API
 * As the only API calls needed are GET methods, only GET
 * is supported
 *
 * @param method
 * @param url
 * @returns Promise<T>
 */
const fetchUtil = async <T>(method: string, url: string): Promise<T> => {
    if (method !== 'GET') {
        throw new Error(`Unsupported method for API request: ${method}`);
    }

    let fetchOptions = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await fetch(url, fetchOptions);

    if (response.ok) {
        return await response.json();
    } else {
        return Promise.reject(response);
    }
};

const getSpecies = async (url: string): Promise<ISpecies> => {
    const speciesResponse = await fetchUtil<ISpeciesResponse>('GET', url);

    /**
     * For yoda, the species name is "Yoda's species", that string doesn't match as
     * key in the object used to map the image url, so it is considered as a special case
     * if the name starts with "yoda"
     */
    const imageUrl = speciesResponse.name.toLowerCase().startsWith('yoda')
        ? SPECIES_IMAGES['yoda']
        : SPECIES_IMAGES[speciesResponse.name.toLowerCase()];

    /**
     * height is retrieves as a string from API. However seems better for FE to
     * consider it as a numeric value. In case we get "n/a", undefined will be stored.
     */
    const heightAsNumber = Number.isNaN(
        parseInt(speciesResponse.average_height, 10)
    )
        ? undefined
        : parseInt(speciesResponse.average_height, 10);

    return {
        name: speciesResponse.name,
        classification: speciesResponse.classification,
        designation: speciesResponse.designation,
        height: heightAsNumber,
        image: imageUrl,
        numFilms: speciesResponse.films.length,
        language: speciesResponse.language,
    };
};

const listSpecies = async () => {
    const filmResponse = await fetchUtil<IFilmResponse>('GET', API_URL);

    const speciesPromises = filmResponse.species.map((speciesUrl) =>
        getSpecies(speciesUrl)
    );

    const speciesResponses = await Promise.all(speciesPromises);

    return speciesResponses.map((species) => species);
};

export { listSpecies };
