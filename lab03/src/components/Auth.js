import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../Data";
import Navbar from "./Navbar";

const Auth = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const saveToLocalStorage = (user) => {
        
    }

    const login = () => {
        const login = document.getElementById("login").value;
        const password = document.getElementById("password").value;

        if (login === "" || password === "") {
            setError("Password and login can't be empty");
            return;
        }

        const newUser = Data.allUsers[login]
        if (newUser) {
            if (newUser.password !== password){
                setError("Invalid password");
                return;
            }
            Data.setCurrentUser(newUser);
            navigate("/", {replace: true});
        }
        else {
            setError(`User: ${login} doesn't exist`);
        }
    };

    const register = () => {
        const login = document.getElementById("login").value;
        const password = document.getElementById("password").value;

        if (login === "" || password === "") {
            setError("Password and login can't be empty");
            return;
        }

        const newUser = { login: login, password: password, favourites: [] };
        if (Data.allUsers[login]) {
            setError(`User: ${login} already exist`);
        }
        else {
            Data.allUsers[login] = newUser;
            Data.setCurrentUser(newUser);
            navigate("/", { replace: true });
        }
    };

    return (
        <div>
            <Navbar />
            <div className="content-container">
                <label>
                    Login
                    <input id="login" className="text-input" type="text" placeholder="Login..." required></input>
                </label>
                <label>
                    Password
                    <input id="password" className="text-input" type="password" placeholder="Password..." required></input>
                </label>
                <button style={{ width: '100%' }} onClick={login}>Login</button>
                <button style={{ width: '100%' }} onClick={register}>Register</button>
                {error === "" ? <></> : <p style={{textAlign: "center"}}>{error}</p>}
            </div>
        </div>
    );
};

export default Auth;
