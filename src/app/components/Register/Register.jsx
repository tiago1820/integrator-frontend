import { useState } from "react";
import validator from "./validation";
import styles from "./Register.module.css";

export const Register = (props) => {
    const { handleRegister } = props;

    const [errors, setErrors] = useState([]);

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setErrors(validator({ ...userData, [e.target.name]: e.target.value }))
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleRegister(userData)
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <h1>New Account</h1>
                <div className={styles.formGroup}>
                    <label htmlFor="">Email</label>
                    <input
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
                        onChange={handleChange}
                        name="password"
                        value={userData.password}
                        type="password"
                        placeholder="Password..." />
                    {errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)}
                </div>
                <button>Register</button>
            </form>
        </div>
    )
}