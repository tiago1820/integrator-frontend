// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Form, Cards, About, Detail, Favorites } from '../components';
import { PATHROUTES } from '../helpers';

const { LOGIN, HOME, ABOUT, DETAIL, FAVORITES } = PATHROUTES;

export const AppRoutes = ({ characters, onClose, handleLogin }) => (
    <Routes>
        <Route path={LOGIN} element={<Form handleLogin={handleLogin} />} />
        <Route path={HOME} element={<Cards characters={characters} onClose={onClose} />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={DETAIL} element={<Detail />} />
        <Route path={FAVORITES} element={<Favorites />} />
    </Routes>
);