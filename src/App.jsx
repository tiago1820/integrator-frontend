import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { filterCharacters, handleCharacterData } from './helpers/app.helper';
import PATHROUTES from './helpers/PathRoutes.helper';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import axios from 'axios';

// firebase
import app from './firebase/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function App() {
   const auth = getAuth(app);
   const { pathname } = useLocation();
   const { LOGIN, HOME, ABOUT, DETAIL } = PATHROUTES;
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const [userCurrent, setUserCurrent] = useState('');
   const navigate = useNavigate();

   function login(userData) {
      signInWithEmailAndPassword(auth, userData.email, userData.password)
         .then((data) => {
            setUserCurrent(data.user.email)
            setAccess(true);
            navigate(HOME);
         })
         .catch((error) => {
            navigate(LOGIN);
         });
   }

   useEffect(() => {
      !access && navigate(LOGIN);
   }, [access]);

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
         {pathname !== LOGIN && <Nav onSearch={onSearch} userCurrent={userCurrent} />}
         <Routes>
            <Route path={LOGIN} element={<Form login={login} />} />
            <Route path={HOME} element={<Cards characters={characters} onClose={onClose} />} />
            <Route path={ABOUT} element={<About />} />
            <Route path={DETAIL} element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;