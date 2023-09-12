import { useState } from 'react';

import styles from './SearchBar.module.css';

const SearchBar = (props) => {
   const  [id, setId] = useState('');

   const handleChange = (e) => {
      setId(e.target.value)
   }

   const { onSearch } = props;

   return (
      <div className={styles.form}>
         <input className={styles.searchInput} type='search' placeholder='write ID...' onChange={handleChange} value={id}/>
         <button className={styles.button} onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}

export default SearchBar;
