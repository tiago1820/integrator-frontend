import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { filterCharacters, handleCharacterData } from './helpers/app.helper';
import PATHROUTES from './helpers/PathRoutes.helper';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import axios from 'axios';

function App() {

   const [characters, setCharacters] = useState([]);
   const { HOME, ABOUT, DETAIL } = PATHROUTES;

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
         <Routes>
            <Route path={HOME} element={<Cards characters={characters} onClose={onClose} />} />
            <Route path={ABOUT} element={<About />} />
            <Route path={DETAIL} element={<Detail />} />
         </Routes>

      </div>
   );
}

export default App;