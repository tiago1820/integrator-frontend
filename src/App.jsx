import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDebugValue, useEffect, useState } from 'react';
import { filterCharacters, handleCharacterData } from './helpers/app.helper';
import PATHROUTES from './helpers/PathRoutes.helper';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Login from './components/Login/Login';
import NewAccount from './components/NewAccount/NewAccount';
import axios from 'axios';
import styles from './App.module.css';

// firebase
import app from './firebase/firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import PasswordReset from './components/PasswordReset/PasswordReset';

function App() {

	const auth = getAuth(app);
	const { pathname } = useLocation();
	const { LOGIN, NEWACCOUNT, PASSWORDRESET, HOME, ABOUT, DETAIL } = PATHROUTES;
	const [characters, setCharacters] = useState([]);
	const [access, setAccess] = useState(false);
	const [userCurrent, setUserCurrent] = useState('');
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	function login(userData) {
		signInWithEmailAndPassword(auth, userData.email, userData.password)
			.then((result) => {
				setUserCurrent(result.user.email)
				setAccess(true);
				navigate(HOME);
			})
			.catch((error) => {
				navigate(LOGIN);
			});
	}

	function registerUser(userData) {
		createUserWithEmailAndPassword(auth, userData.email, userData.password)
			.then((result) => {
				setUserCurrent(result.user.email)
				setAccess(true);
				navigate(HOME);
			})
			.catch(error => {
				console.error(error);
				setMessage('Ha ocurrido un error al registrar el usuario. Por favor, inténtalo de nuevo más tarde.');
			})
	}

	function recoverPassword(userData) {
		sendPasswordResetEmail(auth, userData.email)
			.then((result) => {
				setMessage('Email enviado con exito');
			})
			.catch((error) => {
				setMessage('Error al enviar el correo electronico: ' + error.message)
			})
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
		<div className={styles.app}>
			{pathname !== LOGIN && pathname !== NEWACCOUNT && pathname !== PASSWORDRESET && <Nav onSearch={onSearch} userCurrent={userCurrent} />}
			<Routes>
				<Route path={LOGIN} element={<Login login={login} />} />
				<Route path={NEWACCOUNT} element={<NewAccount registerUser={registerUser} message={message} />} />
				<Route path={PASSWORDRESET} element={<PasswordReset recoverPassword={recoverPassword} message={message} />} />
				<Route path={HOME} element={<Cards characters={characters} onClose={onClose} />} />
				<Route path={ABOUT} element={<About />} />
				<Route path={DETAIL} element={<Detail />} />
			</Routes>
		</div>
	);
}

export default App;