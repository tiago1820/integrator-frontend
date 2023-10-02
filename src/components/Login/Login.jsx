import { useState, useTransition } from "react";
import validator from '../../helpers/validation..helper';
import { Link } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRoutes.helper";
import styles from './Login.module.css';
import { useTranslation } from "react-i18next";

const Login = (props) => {

    const { t } = useTranslation();
    const { NEWACCOUNT, PASSWORDRESET } = PATHROUTES;
    const { login } = props;
    const [errors, setErrors] = useState([]);
    const [invalidLogin, setInvalidLogin] = useState("");
    
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setErrors(validator({ ...userData, [e.target.name]: e.target.value }));
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await login(userData);
        } catch(error) {
            setInvalidLogin("Invalid email or password.")
        }
       
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h3 className={styles.welcome}>{t('welcome')}</h3>
                <h2 className={styles.title}>Log in</h2>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="">{t('email')}</label>
                    <input
                        className={styles.input}
                        onChange={handleChange}
                        type="text"
                        name="email"
                        value={userData.email}
                        placeholder={`${t('email')}...`}

                    />
                </div>
                {errors.e1 ? (<p>{errors.e1}</p>) : errors.e2 ? (<p>{errors.e2}</p>) : (<p>{errors.e3}</p>)}

                <div>
                    <label className={styles.label} htmlFor="">{t('password')}</label>
                    <input
                        className={styles.input}
                        onChange={handleChange}
                        type="password"
                        name="password"
                        value={userData.password}
                        placeholder={`${t('password')}...`}
                    />
                </div>
                {errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)}
                {invalidLogin}
                <button className={styles.button}>{t('login')}</button>

                <div>
                    <Link to={PASSWORDRESET}>{t('forgotPassword')}</Link>
                    <Link to={NEWACCOUNT}>{t('signUp')}</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;