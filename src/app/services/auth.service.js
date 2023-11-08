import axios from "axios";
import { handleErrors } from "../helpers";

export async function login(userData, setAccess, navigate) {
    try {
        const { email, password } = userData;
        const URL = 'http://localhost:3001/rickandmorty/login/';
        const { data } = await axios(URL + `?email=${email}&password=${password}`);
        const { access } = data;
        setAccess(data);
        access
            ? navigate('/app/home')
            : navigate('/app')
    } catch (error) {
        handleErrors(error);
    }
}

export async function register(userData, setAccess, navigate) {
    try {
        const { email, password } = userData;
        const URL = 'http://localhost:3001/rickandmorty/register/';
        const response = await axios.post(URL, { email, password });
        const data = response.data;
        const access = data.access;


        // const { data } = await axios.post(URL + `?email=${email}&password=${password}`);
        // const { access } = data.access;
        setAccess(data);
        access
            ? navigate('/app/home')
            : navigate('/app')
    } catch (error) {
        handleErrors(error);
    }
}