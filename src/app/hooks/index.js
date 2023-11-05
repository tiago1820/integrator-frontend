import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getTotalChar, getCharacterDetail, cleanDetail, getAllCharacters } from '../redux/actions';
import { all } from 'axios';

export const useLocationPathname = () => {
    const { pathname } = useLocation();
    return pathname;
};

export const useCharactersState = () => {
    return useState([]);
};

export const useAccessState = () => {
    return useState(false);
};

export const useNavigateFunction = () => {
    return useNavigate();
};

export const useTotalChar = () => {
    const totalChar = useSelector(state => state.totalCharacters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotalChar());
    }, []);

    return totalChar;
};

export const useAllChars = () => {
    const allChars = useSelector(state => state.allCharacters);
    const dispatch = useDispatch();

    useEffect(() => {
        // if(allChars.length === 0){
        //     dispatch(getAllCharacters());
        // }
        dispatch(getAllCharacters());
    }, []);

    return allChars;
};

export const useCharacter = () => {
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