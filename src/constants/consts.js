import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useLocationPathname = () => {
    const { pathname } = useLocation();
    return pathname;
};

// States
export const useCharactersState = () => {
    return useState([]);
};

export const useAccessState = () => {
    return useState(false);
};

export const useNavigateFunction = () => {
    return useNavigate();
};