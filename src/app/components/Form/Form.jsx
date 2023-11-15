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
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <h1>Log in</h1>
                <div className={styles.formGroup}>
                    <label htmlFor="">Email</label>
                    <input
                        className={styles.input}
                        onChange={handleChange}
                        name="email"
                        value={userData.email}
                        type="text"
                        placeholder="Email..." />
                    {errors.e1 ? (<p>{errors.e1}</p>) : errors.e2 ? (<p>{errors.e2}</p>) : (<p>{errors.e3}</p>)}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="">Password</label>
                    <input
                        className={styles.input}
                        onChange={handleChange}
                        name="password"
                        value={userData.password}
                        type="password"
                        placeholder="Password..." />
                    {errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)}
                </div>
                {errorReq && (
                    <div className={styles.alert}>
                        {errorReq}
                    </div>
                )}
                <button className={styles.submit}>Submit</button>
            </form>
        </div>
    )
}