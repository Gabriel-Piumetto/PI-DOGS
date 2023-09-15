import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { useEffect, useState } from 'react';

const ResultDogs = () => {
    const location = useLocation();
    const searched = location.search;
    const [perroState, setPerroState] = useState([]);

    useEffect(() => {
        const traerData = async () => {
            
                const serverData = await axios.get(`http://localhost:3001/dogs${searched}`);
                const dogs = serverData.data;
                setPerroState(dogs)
            
        }

        traerData();
    }, [searched]);

    

    return (
        <div>
            {perroState.map((perro) => (
                <Card
                    id={perro.id} 
                    image={perro.reference_image_id}
                    name={perro.name}
                    temperament={`${perro.temperament}`}
                    weight={perro.weight}
                />
            ))}
        </div>
    )
}

export default ResultDogs;
