import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './SearchBar.module.css';

export const SearchBar = (props) => {
   const { t } = useTranslation();

   const [id, setId] = useState('');

   const handleChange = (e) => {
      setId(e.target.value)
   }

   const { onSearch } = props;

   return (
      <div className={styles.form}>
         <input className={styles.searchInput} type='search' placeholder='write ID...' onChange={handleChange} value={id} />
         <button className={styles.button} onClick={() => onSearch(id)}>{t('add')}</button>
      </div>
   );
}