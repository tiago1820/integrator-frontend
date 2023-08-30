import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';

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

      setCharacteres((prevState) => [...prevState,]);

   };

   return (
      <div className='App'>
         <Nav onSearch={handleSearch} />
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={handleOnClose}/>} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>

         

      </div>
   )
}

export default App;
