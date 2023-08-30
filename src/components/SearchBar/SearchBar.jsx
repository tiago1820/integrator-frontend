import React from "react";

export default function SearchBar({onSearch}) {
    return (
        <div>
            <input type="search" />
            <button onClick={() => {onSearch(21)}}>Agregar</button>
        </div>
    );
}