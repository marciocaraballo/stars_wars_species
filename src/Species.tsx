import './Species.scss';

interface SpeciesProps {
    readonly name: string;
    readonly classification: string;
    readonly designation: string;
    readonly height: number | undefined;
    readonly image: string;
    readonly numFilms: number;
    readonly language: string;
}

const CM_TO_IN_CONVERSION_RATIO = 2.54;
const NA = 'n/a';

const Species = ({
    name,
    classification,
    designation,
    height,
    image,
    numFilms,
    language,
}: SpeciesProps) => (
    <div className="Species">
        <h2>{name}</h2>
        <img src={image} alt={name} width={200} height={100} />
        <div className="Species-data">
            <p>
                <strong>Classification:</strong> {classification}
            </p>
            <p>
                <strong>Designation:</strong> {designation}
            </p>
            <p>
                <strong>Language:</strong> {language}
            </p>
            <p>
                <strong>Avg. Height:</strong>{' '}
                {height !== undefined ? (
                    <span>
                        {Math.round(height / CM_TO_IN_CONVERSION_RATIO)}
                        &#8243;
                    </span>
                ) : (
                    NA
                )}
            </p>
            <p>
                <strong>Number of Films:</strong> {numFilms}
            </p>
        </div>
    </div>
);

export default Species;
export type { SpeciesProps };
