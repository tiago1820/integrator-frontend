import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getTotalChar } from '../redux/actions';

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