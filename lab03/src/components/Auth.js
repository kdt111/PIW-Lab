import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Data from "../Data";
import { auth } from "../firebase/Init";
import { logInWithEmailAndPassword, logInWithGithub, logInWithGoogle, registerUser } from "../firebase/Users";
import Navbar from "./Navbar";

const Auth = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const [user, loading, userError] = useAuthState(auth);

    useEffect(() => {
        if (loading)
            return;
        if (user) {
            Data.setCurrentUser(user);
            navigate("/");
        }
        if (userError)
            setError({userError});
    },[user, loading]);

    const login = () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const name = document.getElementById("name").value;

        if (email === "" || password === "") {
            setError("Some field is empty");
            return;
        }

        logInWithEmailAndPassword(email, password);
    };

    const register = () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const name = document.getElementById("name").value;


        if (email === "" || password === "" || name === "") {
            setError("Some field is empty");
            return;
        }

        registerUser(email, password, name);
    };

    return (
        <div>
            <Navbar />
            <div className="content-container">
                <label>
                    Name
                    <input id="name" className="text-input" type="text" placeholder="Name (only required when registering)..."></input>
                </label>
                <label>
                    Email
                    <input id="email" className="text-input" type="text" placeholder="Email..."></input>
                </label>
                <label>
                    Password
                    <input id="password" className="text-input" type="password" placeholder="Password..."></input>
                </label>
                <button style={{ width: '100%' }} onClick={login}>Login</button>
                <button style={{ width: '100%' }} onClick={register}>Register</button>
                {error === "" ? <></> : <p style={{textAlign: "center"}}>{error}</p>}
                <button style={{ width: '100%' }} onClick={logInWithGoogle}>Login with Google</button>
                <button style={{ width: '100%' }} onClick={logInWithGithub}>Login with GitHub</button>
            </div>
        </div>
    );
};

export default Auth;
