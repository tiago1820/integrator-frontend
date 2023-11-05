// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Form, Cards, About, Detail, Favorites, Site } from '../components';
import { PATHROUTES } from '../helpers';

const { LOGIN, HOME, ABOUT, DETAIL, FAVORITES, SITE } = PATHROUTES;

export const AppRoutes = ({ characters, onClose, handleLogin, allChars }) => (
    <Routes>
        <Route path={SITE} element={<Site />} />
        <Route path={LOGIN} element={<Form handleLogin={handleLogin} />} />
        <Route path={HOME} element={<Cards characters={characters} allChars={allChars} onClose={onClose} />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={DETAIL} element={<Detail />} />
        <Route path={FAVORITES} element={<Favorites />} />
    </Routes>
);