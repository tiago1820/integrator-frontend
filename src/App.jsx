// DEPENDENCIES AND HOOKS
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
// COMPONENTS
import { About, Nav, Detail, Cards, PasswordReset, NewAccount, Login, Favorites, ProtectedRoute, Error404 } from "./components";
// FILES
import { filterCharacters, handleCharacterData } from './helpers/app.helper';
import PATHROUTES from './helpers/PathRoutes.helper';
import { removeUser, setTotalChar, setUser } from './redux/actions';
import styles from './App.module.css';
// FIREBASE
import app from './firebase/firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

function App(props) {

	const { setTotalChar, totalChars, user, setUser, removeUser } = props;
	const auth = getAuth(app);
	const { pathname } = useLocation();
	const { LOGIN, NEWACCOUNT, PASSWORDRESET, HOME, ABOUT, DETAIL, FAVORITES, ERROR_404 } = PATHROUTES;
	const [characters, setCharacters] = useState([]);
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	async function login(userData) {
		try {
			const result = await signInWithEmailAndPassword(auth, userData.email, userData.password);

			const user = {
				id: result.user.uid,
				email: result.user.email
			}

			setUser(user);
			navigate(HOME);
			const totalChars = await getTotalChars();
			setTotalChar(totalChars)
		} catch (error) {
			navigate(LOGIN);
			throw error;
		}
	}

	const logout = () => removeUser();


	function getTotalChars() {
		return axios.get("https://rickandmortyapi.com/api/character/")
			.then(response => {
				return response.data.info.count;
			})
			.catch(error => {
				console.error(error);
				throw error;
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

	// useEffect(() => {
	// 	!access && navigate(LOGIN);
	// }, [access]);

	const onSearch = (id) => {
		axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
			handleCharacterData(data, characters, setCharacters);
		});
	}

	// RANDOM
	function getRandomNumber() {
		return Math.floor(Math.random() * totalChars) + 1;

	}

	const getRandom = () => {
		let id;

		const isIdCharacters = (id) => {
			return characters.some(characters => characters.id === id);
		}

		do {
			id = getRandomNumber();
		} while (isIdCharacters(id));

		axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
			handleCharacterData(data, characters, setCharacters);
		});
	}

	const onClose = (id) => {
		setCharacters(filterCharacters(characters, id));
	}

	useEffect(() => {
		const currentPath = window.location.pathname;
		const validRoutes = [HOME, ABOUT, DETAIL, FAVORITES]
		if (!validRoutes.includes(currentPath)) {
			navigate(ERROR_404);
		}

		if (currentPath === LOGIN && user) {
			navigate(HOME);
		}
	}, [])

	return (
		<div className={styles.app}>
			{pathname !== LOGIN && pathname !== NEWACCOUNT && pathname !== PASSWORDRESET && <Nav logout={logout} onSearch={onSearch} userCurrent={user?.email} getRandom={getRandom} />}
			<Routes>
				<Route path={LOGIN} element={<Login login={login} />} />
				<Route path={NEWACCOUNT} element={<NewAccount registerUser={registerUser} message={message} />} />
				<Route path={PASSWORDRESET} element={<PasswordReset recoverPassword={recoverPassword} message={message} />} />

				<Route element={<ProtectedRoute isAllowed={!!user} redirectTo={LOGIN} pathname={pathname} />}>
					<Route path={HOME} element={<Cards characters={characters} onClose={onClose} />} />
					<Route path={ABOUT} element={<About />} />
					<Route path={DETAIL} element={<Detail />} />
					<Route path={FAVORITES} element={<Favorites />} />
					<Route path={ERROR_404} element={<Error404 />} />
				</Route>

			</Routes>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		setTotalChar: (total) => {
			dispatch(setTotalChar(total))
		},

		setUser: (user) => {
			dispatch(setUser(user))
		},

		removeUser: () => {
			dispatch(removeUser())
		}
	}
}

const mapStateToProps = (state) => {
	return {
		totalChars: state.totalChars,
		user: state.user,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);