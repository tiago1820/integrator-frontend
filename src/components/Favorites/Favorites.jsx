import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";

const Favorites = (props) => {
	const dispatch = useDispatch();
	const { myFavorites } = props;

	const handleOrder = (e) => {
		dispatch(orderCards(e.target.value));
	}

	const handleFilter = (e) => {
		dispatch(filterCards(e.target.value))
	}

	return (
		<div>
			<select onChange={handleOrder}>
				<option value="A">Ascendentes</option>
				<option value="D">Descendentes</option>
			</select>

			<select onChange={handleFilter}>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
				<option value="Genderless">Genderless</option>
				<option value="unknown">unknown</option>
			</select>

			{myFavorites.map((char) => {
				return (
					<Card
						key={char.id}
						id={char.id}
						name={char.name}
						status={char.status}
						species={char.species}
						gender={char.gender}
						origin={char.origin.name}
						image={char.image}
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
