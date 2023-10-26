import axios from "axios";
import { handleErrors } from "../helpers";

export async function login(userData, setAccess, navigate) {
    try {
        const { email, password } = userData;
        const URL = 'http://localhost:3001/rickandmorty/login/';
        const { data } = await axios(URL + `?email=${email}&password=${password}`);
        const { access } = data;
        setAccess(data);
        access && navigate('/home');
    } catch (error) {
        handleErrors(error);
    }
}