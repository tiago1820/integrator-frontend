import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './SearchBar.module.css';

export const SearchBar = (props) => {
   const { onSearch } = props;
   const { t } = useTranslation();
   const [id, setId] = useState('');
   const inputRef = useRef(null);

   useEffect(() => {
      inputRef.current.focus();
   }, []);

   const handleChange = (e) => {
      setId(e.target.value)
   }

   return (
      <div className={styles.form}>
         <div className={styles.column}>
            <h2>{t('characters')}</h2>
            <div className={styles.row}>
               <input
                  ref={inputRef}
                  className={styles.searchInput}
                  type='search'
                  placeholder={t('searchId')}
                  onChange={handleChange}
                  value={id} />
               <button className={styles.button} onClick={() => onSearch(id)}>{t('add')}</button>
            </div>
         </div>

      </div>
   );
}