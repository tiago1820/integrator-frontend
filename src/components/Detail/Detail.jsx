import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './Detail.module.css';
import axios from "axios";

const Detail = () => {
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
		return setCharacter({});
	}, [id]);

	return (
		<div className={styles.link}>
			<div className={styles.card}>
				{/* <button onClick={() => onClose(id)}>X</button> */}
				<img className={styles.image} src={character?.image} alt='' />
				<div className={styles.cardContent}>
					<div className={styles.name}>{character?.name}</div>
					<div>
						<div>{character?.species}</div>
						<div>{character?.gender}</div>
						<div className={styles.origin}>{character.origin?.name}</div>
					</div>
				</div>
			</div>
			<div className={styles.status}>{character?.status}</div>
		</div>
	)
}

export default Detail
