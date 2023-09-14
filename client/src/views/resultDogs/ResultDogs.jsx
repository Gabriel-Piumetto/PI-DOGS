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
            try {
                const serverData = await axios.get(`http://localhost:3001/dogs${searched}`);
                const dogs = serverData.data;
                setPerroState(dogs); // Actualiza el estado directamente con el array de perros
            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        }

        traerData();
    }, [searched]);

    

    return (
        <div>
            {perroState.map((perro) => (
                <Card
                    key={perro.id} // Agrega una clave única para cada elemento en el array
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
