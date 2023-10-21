import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { cleanDetail, getCharacterDetail } from "../redux/actions";

const useCharacter = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const character = useSelector((state) => state.characterDetail);

    useEffect(() => {
        dispatch(getCharacterDetail(id));

        return () => {
            dispatch(cleanDetail());
        }
    }, [id]);

    return character;
};

export default useCharacter;