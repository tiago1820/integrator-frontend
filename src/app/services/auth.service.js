import axios from "axios";
import { handleErrors } from "../helpers";

export async function login(userData, setAccess, setUser, navigate) {
    try {
        const { email, password } = userData;
        const URL = 'http://localhost:3001/rickandmorty/login/';
        const { data } = await axios(URL + `?email=${email}&password=${password}`);
        const { access, user } = data;
        setAccess(access);
        setUser(user)
        access
            ? navigate('/app/home')
            : navigate('/app')
    } catch (error) {
        handleErrors(error);
    }
}

export async function register(userData, setAccess, setUser, navigate) {
    try {
        const { email, password } = userData;
        const URL = 'http://localhost:3001/rickandmorty/register/';
        const response = await axios.post(URL, { email, password });
        const data = response.data;
        const { access, user } = data;
        setAccess(access);
        setUser(user)
        access
            ? navigate('/app/home')
            : navigate('/app')
    } catch (error) {
        handleErrors(error);
    }
}