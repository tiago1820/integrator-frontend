
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import axios from 'axios';
import { useState } from 'react';
import { filterCharacters, handleCharacterData } from './Helpers';

function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         handleCharacterData(data, characters, setCharacters);
      })
   }

   const onClose = (id) => {
      setCharacters(filterCharacters(characters, id));
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;