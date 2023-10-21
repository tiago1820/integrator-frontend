import axios from "axios";

async function login(userData, setAccess, navigate) {
    try {
        const { email, password } = userData;
        const URL = 'http://localhost:3001/rickandmorty/login/';
        const { data } = await axios(URL + `?email=${email}&password=${password}`);
        const { access } = data;
        setAccess(data);
        access && navigate('/home');
    } catch (error) {
        console.log(error);
    }
}

export default login;