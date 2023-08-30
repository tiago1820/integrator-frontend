import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});//limpia el componente cuando se desmonte el componente
    }, [id]);//watcher del ID

    return (
        <div>
            {// importante hace el renderizado condicional por el tema de la demora del backend
                character.name &&
                <div>
                    <h2>{character.name}</h2>
                    <p><b>Status:</b>{character.status}</p>
                    <p><b>Species:</b>{character.species}</p>
                    <p><b>Gender:</b>{character.sender}</p>
                    <p><b>Origin:</b>{character.origin.name}</p>
                    <img src={character.image} alt="Image not found" />
                </div>
            }
        </div>

    )
}