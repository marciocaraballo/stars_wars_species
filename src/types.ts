interface IFilmResponse {
    characters: string[];
    created: Date;
    director: string;
    edited: Date;
    episode_id: string;
    opening_crawl: string;
    planets: string[];
    producer: string;
    release_date: Date;
    species: string[];
    starships: string[];
    title: string;
    url: string;
    vehicles: string[];
}

interface ISpeciesResponse {
    readonly average_height: string;
    readonly average_lifespan: string;
    readonly classification: string;
    readonly created: Date;
    readonly designation: string;
    readonly edited: Date;
    readonly eye_colors: string;
    readonly hair_colors: string;
    readonly homeworld: string;
    readonly language: string;
    readonly name: string;
    readonly people: string[];
    readonly films: string[];
    readonly skin_colors: string;
    readonly url: string;
}

interface ISpecies {
    readonly name: string;
    readonly classification: string;
    readonly designation: string;
    readonly height: string;
    readonly image: string;
    readonly numFilms: number;
    readonly language: string;
}

interface ISpeciesImages {
    [speciesName: string]: string;
}

export type { IFilmResponse, ISpeciesResponse, ISpecies, ISpeciesImages };
