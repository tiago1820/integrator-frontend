import React, { useState } from "react";

export default function SearchBar({onSearch}) {

    const [id, setId] = useState('');

    const handleChange = (event) => {
        setId(event.target.value)
    }



    return (
        <div>
            <input type="search" onChange={handleChange} />
            <button onClick={() => {onSearch(id)}}>Agregar</button>
        </div>
    );
}