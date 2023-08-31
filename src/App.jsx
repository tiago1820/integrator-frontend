import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

function App() {

   const [characters, setCharacteres] = useState([]);
   const [access, setAccess] = useState(false);

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   // emulacion de base de datos
   const username = 'tiago.zdo@gmail.com';
   const password = '123456';

   const navigate = useNavigate();
   const location = useLocation();

   function login(userData) {
      if (userData.password === password && userData.username === username) {
         setAccess(true);
         navigate('/home');
      }
      else {
         alert('El usuario no se encuentra en nuestra base de datos.')
      }
   }

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
         <div>
            {location.pathname !== '/' ? <Nav onSearch={handleSearch} /> : undefined}
         </div>




         <Routes>
            <Route path='/' element={<Form login={login} />} />

            <Route path='/home' element={
               <Cards characters={characters} onClose={handleOnClose} />
            } />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>



      </div>
   )
}

export default App;
