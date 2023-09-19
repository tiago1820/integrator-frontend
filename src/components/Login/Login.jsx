import { useState } from "react";
import validator from '../../helpers/validation..helper';
import { Link } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRoutes.helper";
import styles from './Login.module.css';

const Login = (props) => {

    const { NEWACCOUNT, PASSWORDRESET } = PATHROUTES;
    const { login } = props;
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
        login(userData);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h2 className={styles.title}>Login</h2>
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

                <div>
                    <label className={styles.label} htmlFor="">Password</label>
                    <input
                        className={styles.input}
                        onChange={handleChange}
                        type="password"
                        name="password"
                        value={userData.password}
                        placeholder="Password..."
                    />
                </div>
                {errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)}

                <button className={styles.button}>Login</button>

                <div>
                    {/* <Link to={PASSWORDRESET}>Olvide mi contraseña</Link> */}
                    <Link to={NEWACCOUNT}>Sign up</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;