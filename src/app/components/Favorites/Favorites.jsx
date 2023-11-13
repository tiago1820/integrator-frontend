import { useDispatch, useSelector } from "react-redux";
import { FavCard } from '../../components';
import { filterCards, orderCards, showAllcharacters, removeFav, loadFavorites } from "../../redux/actions";
import { useEffect, useState } from "react";
import styles from "./Favorites.module.css";

export const Favorites = () => {
    const dispatch = useDispatch();
    const myFavorites = useSelector(state => state.myFavorites);
    const user = useSelector(state => state.user);

    const [aux, setAux] = useState(false);

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
        setAux(!aux);
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
        dispatch(loadFavorites(user.id));
    }, []);

    return (
        <>
            <div className={styles.selectors}>
                <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>

                <select onChange={handleFilter}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.row}>
                        {myFavorites.map((char) => {
                            return (
                                <FavCard
                                    key={char.uid}
                                    id={char.uid}
                                    uid={char.uid}
                                    name={char.name}
                                    status={char.status}
                                    //                                     species={char.species}
                                    //                                     gender={char.gender}
                                    //                                     origin={char.origin.name}
                                    image={char.image}
                                    onClose={() => dispatch(removeFav(user.id, char.uid))}
                                />
                            )
                        })}
                    </div>

                </div>
            </div>

        </>
    )
}