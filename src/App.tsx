import './App.scss';

import { useEffect, useState } from 'react';
import Species from './Species';
import { listSpecies } from './api';
import { ISpecies } from './types';

function App() {
    const [species, setSpecies] = useState<Array<ISpecies>>([]);

    useEffect(() => {
        async function fetchSpecies() {
            try {
                const speciesList = await listSpecies();

                setSpecies(speciesList);
            } catch (e) {
                /**
                 * Not required for the challenge, but ideally the user should be informed
                 * about API errors, with an error component or an error notification
                 */
            }
        }

        fetchSpecies();
    }, []);

    return (
        <div className="App">
            <h1>Empire Strikes Back - Species Listing</h1>
            <div className="App-species">
                {species.map((sp) => {
                    return (
                        <Species
                            key={sp.name}
                            name={sp.name}
                            classification={sp.classification}
                            designation={sp.designation}
                            height={sp.height}
                            image={sp.image}
                            numFilms={sp.numFilms}
                            language={sp.language}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
