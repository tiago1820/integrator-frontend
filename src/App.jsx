// DEPENDENCIES AND HOOKS
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// COMPONENTS
import { About, Nav, Detail, Cards, PasswordReset, NewAccount, Login, Favorites, ProtectedRoute, Error404 } from "./components";
// FILES
import { filterCharacters, handleCharacterData } from './helpers/app.helper';
import PATHROUTES from './helpers/PathRoutes.helper';
import { removeUser, setTotalChar, setUser } from './redux/actions';
import styles from './App.module.css';

function App() {

	const totalChars = useSelector(state => state.totalChars);
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { LOGIN, NEWACCOUNT, PASSWORDRESET, HOME, ABOUT, DETAIL, FAVORITES, ERROR_404 } = PATHROUTES;
	const [characters, setCharacters] = useState([]);
	const [message, setMessage] = useState('');

	async function login(userData) {
		try {
			const { email: userEmail, password: userPass } = userData;
			const URL = "http://localhost:3001/rickandmorty/login/";
			const { data } = await axios(`${URL}?email=${userEmail}&password=${userPass}`);
			const { uid, email } = data;
			const user = { uid, email };

			dispatch(setUser(user));
			navigate(HOME);
			const totalChars = await getTotalChars();
			console.log("DATAAA", totalChars);
			dispatch(setTotalChar(totalChars));
		} catch (error) {
			navigate(LOGIN);
			throw error;
		}
	}

	const logout = () => dispatch(removeUser());

	async function registerUser(userData) {
		try {
			const { email: userEmail, password: userPass } = userData;
			const URL = "http://localhost:3001/rickandmorty/register/";
			const { data } = await axios(`${URL}?email=${userEmail}&password=${userPass}`);
			const { uid, email } = data;
			const user = { uid, email };

			dispatch(setUser(user));
			navigate(HOME);
			const totalChars = await getTotalChars();
			dispatch(setTotalChar(totalChars));

		} catch {
			console.error(error);
			navigate(NEWACCOUNT);
		}
	}

	async function recoverPassword(userData) {
		try {
			const { email: userEmail } = userData;
			const URL = "http://localhost:3001/rickandmorty/recover/";
			await axios(`${URL}?email=${userEmail}`);
		} catch (error) {
			setMessage('Error al enviar el correo electronico: ' + error.message)

		}
	}

	function getTotalChars() {
		return axios.get("http://localhost:3001/rickandmorty/character/count")
			.then(response => {
				return response.data.totalCharacterCount;
			})
			.catch(error => {
				console.error(error);
				throw error;
			});
	}

	const onSearch = (id) => {
		axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
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

		console.log("ID", id);

		axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
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

export default App;