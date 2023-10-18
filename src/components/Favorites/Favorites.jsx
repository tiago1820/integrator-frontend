import { connect, useDispatch } from "react-redux";
import { Card } from "../../components";
import { filterCards, orderCards, showAllcharacters } from "../../redux/actions";
import { removeFav, getFavs } from "../../redux/actions";
import styles from "./Favorites.module.css";
import { useEffect } from "react";

const Favorites = (props) => {
	const dispatch = useDispatch();
	const { myFavorites } = props;

	const handleOrder = (e) => {
		dispatch(orderCards(e.target.value));
	}

	const handleFilter = (e) => {
		const selectedValue = e.target.value;
		if (selectedValue === "All") {
			dispatch(showAllcharacters());
		} else {
			dispatch(filterCards(selectedValue));
		}
	}

	useEffect(() => {
		dispatch(getFavs());

	}, [])


	return (
		<div>
			<div className={styles.selectContainer}>
				<select className={styles.select} onChange={handleOrder}>
					<option value="A">Ascendentes</option>
					<option value="D">Descendentes</option>
				</select>

				<select className={styles.select} onChange={handleFilter}>
					<option value="All">All</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Genderless">Genderless</option>
					<option value="unknown">unknown</option>
				</select>
			</div>

			{myFavorites.map((char) => {
				return (
					<Card
						key={char.id}
						id={char.id}
						uid={char?.uid}
						name={char.name}
						status={char.status}
						species={char.species}
						gender={char.gender}
						origin={char.origin?.name}
						image={char.image}
						onClose={() => dispatch(removeFav(char.uid))}
					/>
				)
			})}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	}
}

export default connect(mapStateToProps, null)(Favorites);
