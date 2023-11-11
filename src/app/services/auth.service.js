import axios from "axios";
import { handleErrors } from "../helpers";
import { setUser } from "../redux/actions";

export async function login(userData, setAccess, navigate, dispatch) {
    try {
        const { email, password } = userData;
        const URL = 'http://localhost:3001/rickandmorty/login/';
        const { data } = await axios(URL + `?email=${email}&password=${password}`);
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

export async function register(userData, setAccess, navigate, dispatch) {
    try {
        const { email, password } = userData;
        const URL = 'http://localhost:3001/rickandmorty/register/';
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