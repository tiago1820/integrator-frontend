import axios from "axios";
import { handleErrors } from "../helpers";
import { removeFav, setUser, removeUser } from "../redux/actions";
import { URL } from "../constants";

const API_URL = URL;

export async function login(userData, setAccess, navigate, dispatch) {
    try {
        const { email, password } = userData;
        // const URL = 'http://localhost:3001/rickandmorty/login/';
        const { data } = await axios(`${API_URL}login/?email=${email}&password=${password}`);
        const { access, user } = data;
        setAccess(access);
        dispatch(setUser(user));
        access
            ? navigate('/app/home')
            : navigate('/app')
    } catch (error) {
        handleErrors(error);
    }
}

export async function logout(dispatch) {
    try {
        dispatch(removeUser());
    } catch (error) {
        handleErrors(error);
    }
}

export async function register(userData, setAccess, navigate, dispatch) {
    try {
        const { email, password } = userData;
        const URL = `${API_URL}register/`;
        const response = await axios.post(URL, { email, password });
        const data = response.data;
        const { access, user } = data;
        setAccess(access);
        dispatch(setUser(user));
        access
            ? navigate('/app/home')
            : navigate('/app')
    } catch (error) {
        handleErrors(error);
    }
}