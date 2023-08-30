import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';

function App() {

   const [characters, setCharacteres] = useState([]);

   const handleOnClose = (id) => setCharacteres((prevState) => prevState.filter((ch) => ch.id !== +id));

   const handleSearch = (characterID) => {
      fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
         .then((response) => response.json())
         .then((data) => {
            if (data.name) {
               setCharacteres((prevState) => [...prevState, data]);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         });

      setCharacteres((prevState) => [...prevState, ]);

   };

   return (
      <div className='App'>
         <div>
            <Nav onSearch={handleSearch} />
         </div>
         <hr />
         <div>
            <Cards
               characters={characters}
               onClose={handleOnClose}
            />
         </div>

      </div>
   )
}

export default App;
