// import { connect } from "react-redux"
import Card from "../Card/Card"
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Favorites() {
    let favorites = useSelector(state => state.myFavorite);

    useEffect(() => {}, [favorites]);

    return (
        <div>
            {favorites?.map(fav => (
                <Card
                    name={fav.name}
                    id={fav.id}
                    key={fav.id}
                    gender={fav.gender}
                    image={fav.image}
                />
            ))}
        </div>
    )
}