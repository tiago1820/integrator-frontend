// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Form, Cards, About, Detail, Favorites, Site, Register, Error } from '../components';
import { PATHROUTES } from '../helpers';

const { LOGIN, HOME, ABOUT, DETAIL, FAVORITES, SITE, REGISTER, NOT_FOUND } = PATHROUTES;

export const AppRoutes = ({ characters, onClose, handleLogin, handleRegister }) => (
    <Routes>
        <Route path={SITE} element={<Site />} />
        <Route path={REGISTER} element={<Register handleRegister={handleRegister} />} />
        <Route path={LOGIN} element={<Form handleLogin={handleLogin} />} />
        <Route path={HOME} element={<Cards characters={characters} onClose={onClose} />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={DETAIL} element={<Detail />} />
        <Route path={FAVORITES} element={<Favorites />} />
        <Route path={NOT_FOUND} element={<Error />} />
    </Routes>
);