interface IFilmResponse {
    readonly characters: string[];
    readonly created: Date;
    readonly director: string;
    readonly edited: Date;
    readonly episode_id: string;
    readonly opening_crawl: string;
    readonly planets: string[];
    readonly producer: string;
    readonly release_date: Date;
    readonly species: string[];
    readonly starships: string[];
    readonly title: string;
    readonly url: string;
    readonly vehicles: string[];
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
