import React from "react";
import SearchBar from '../SearchBar/SearchBar';

import styles from './Nav.module.css';

const { nav } = styles;

const Nav = ({ onSearch }) => {

    return (
        <div className={nav}>
            <SearchBar onSearch={onSearch} />
        </div>
    );
}

export default Nav;