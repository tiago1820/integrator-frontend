import { useState } from 'react';
import validator from '../../helpers/validation..helper';
import { Link } from 'react-router-dom';
import PATHROUTES from '../../helpers/PathRoutes.helper';
import styles from './PasswordReset.module.css';

const PasswordReset = (props) => {

    const { recoverPassword, message } = props;
    const { LOGIN, NEWACCOUNT } = PATHROUTES;
    const [errors, setErrors] = useState([]);
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setErrors(validator({ ...userData, [e.target.name]: e.target.value }));
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        recoverPassword(userData);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h2 className={styles.title}>Password Reset</h2>
                <p>Escribí tu mail para que te enviemos un correo para crear una nueva contraseña.</p>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="">Email</label>
                    <input
                        className={styles.input}
                        onChange={handleChange}
                        type="text"
                        name="email"
                        value={userData.email}
                        placeholder="Email..."

                    />
                </div>
                {errors.e1 ? (<p>{errors.e1}</p>) : errors.e2 ? (<p>{errors.e2}</p>) : (<p>{errors.e3}</p>)}

                <button className={styles.button}>Resetar Contraseña</button>
                {message ? (<p>{message}</p>) : (<p></p>)}

                <div>
                    <Link to={LOGIN}>Login</Link>
                    <Link to={NEWACCOUNT}>Sign up</Link>
                </div>
            </form>
        </div>
    )
}

export default PasswordReset;