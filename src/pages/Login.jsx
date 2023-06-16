import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
//import Loader from "react-loader-spinner";


import users from '../assets/json/users.json'



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [pass, setPass] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const fromPublish = location.state?.fromPublish ? true : null;

    const handleSubmit = (event) => {
        try {
            event.preventDefault();
            setIsLoading(true);
            
            for (let i = 0; i < users.length; i++) {
                if (users[i].Email.includes(email)) {
                    if (users[i].MP.includes(password)) {
                        setPass(true);
                    } else {
                        break;
                    }
                }
            }

           

          /*
          const response = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/user/login`,
            {
              email: email,
              password: password,
            }
          );
          */
            if (response.data.token) {
                setUser(response.data.token);
                setIsLoading(false);
                navigate(fromPublish ? "/publish" : "/");
            } else {
                alert("Une erreur est survenue, veuillez réssayer.");
            }
        } catch (error) {
            /*
            if (error.response.status === 401 || error.response.status === 400) {
                setErrorMessage("Mauvais email et/ou mot de passe");
                setIsLoading(false);
            }
            */
            console.log(error.message);
        }
    };
    console.log("pass : " + pass);
    return (
        <div>
            <h2>Se connecter</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <input
                    onChange={(event) => {
                        setEmail(event.target.value);
                        setErrorMessage("");
                    }}
                    placeholder="Adresse email"
                    type="email"
                />
                <input
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    placeholder="Mot de passe"
                    type="password"
                />
                <span className="signup-login-error-message">{errorMessage}</span>
                <button disabled={isLoading ? true : false} type="submit">
                    Se connecter
                </button>
            </form>
            <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
        </div>

    );

}

export default Login;