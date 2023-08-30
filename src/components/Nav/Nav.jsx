import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import { Link } from "react-router-dom";

import styles from './Nav.module.css';
const { nav, link } = styles;

const Nav = ({ onSearch }) => {

    return (
        <div className={nav}>
            <SearchBar onSearch={onSearch} />
            <Link to='/home' className={link}>Home</Link>
            <Link to='/about' className={link}>About</Link>
        </div>
    );
}

export default Nav;