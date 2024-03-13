import { useState } from "react";
import validator from "./validation";
import styles from "./Form.module.css";

export const Form = (props) => {
    const { handleLogin } = props;

    const [errors, setErrors] = useState([]);
    const [errorReq, setErrorReq] = useState("");

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setErrors(validator({ ...userData, [e.target.name]: e.target.value }))
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Object.values(errors).some(error => error !== null && error !== undefined && error !== '')) {
            console.log('Hay errores en el formulario. No se puede enviar.');
        } else {
            try {
                await handleLogin(userData)
            } catch (error) {
                setErrorReq(error.response.data.message);
            }
        }
    }

    return (

        <div className="bg-gray-200 flex items-center justify-center h-screen">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-semibold">Loggin</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={handleChange}
                            name="email"
                            value={userData.email}
                            type="text"
                            placeholder="Email..."
                        />
                        {errors.e1 ? (<p>{errors.e1}</p>) : errors.e2 ? (<p>{errors.e2}</p>) : (<p>{errors.e3}</p>)}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={handleChange}
                            name="password"
                            value={userData.password}
                            type="password"
                            placeholder="Password..."
                        />
                        {errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)}
                    </div>
                    {errorReq && (<div className={styles.alert}>{errorReq}</div>)}

                    <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Login</button>
                </form>
            </div>
        </div>
    )
}