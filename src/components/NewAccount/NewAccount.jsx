import { useState } from "react";
import validator from '../../helpers/validation..helper';
import { Link } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRoutes.helper";
import styles from './NewAccount.module.css';
import { useTranslation } from "react-i18next";

const NewAccount = (props) => {

	const { t } = useTranslation();
	const {registerUser, message} = props;
	const { LOGIN } = PATHROUTES;
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
		e.preventDefault();
		registerUser(userData);
	}


	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
				<h2 className={styles.title}>{t("newAccount")}</h2>
				<div className={styles.inputContainer}>
					<label className={styles.label} htmlFor="">{t("email")}</label>
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

				<button className={styles.button}>{t("newAccount")}</button>
				{message ? (<p>{message}</p>) : (<p></p>)}

				<div>
					<Link to={LOGIN}>{t("haveAccount")}</Link>
				</div>
			</form>
		</div>
	)
}

export default NewAccount
