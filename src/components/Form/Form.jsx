import { useState } from "react";
import validator from './validation';

const Form = (props) => {

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
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Email</label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="email"
                    value={userData.email}
                    placeholder="Email..."

                />
                {errors.e1 ? (<p>{errors.e1}</p>) : errors.e2 ? (<p>{errors.e2}</p>) : (<p>{errors.e3}</p>)}

                <label htmlFor="">Password</label>
                <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    value={userData.password}
                    placeholder="Password..."
                />
                {errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)}

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;
