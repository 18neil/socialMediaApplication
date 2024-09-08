import React, { useState } from "react";
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from "../../action/Authaction"; // Ensure `signUp` is imported if you use it

const Login = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.authReducer?.loading || false);
    const [isSignUp, setIsSignUp] = useState(false); 
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmPassword: ""
    });
    
    const [confirmPass, setConfirmPass] = useState(false); 
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            data.password === data.confirmPassword
                ? dispatch(signUp(data))
                : setConfirmPass(true); // Changed from `false` to `true` to show error message
        } else {
            dispatch(logIn(data));
        }

        setData({
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            confirmPassword: ""
        });
    };

    const resetForm = () => {
        setConfirmPass(false); // Changed from `true` to `false` to reset the error state
        setData({
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            confirmPassword: ""
        });
    };

    return (
        <div className="Login">
            <div className="s-left">
                <div className="appname">
                    <h1>Mongo Talk</h1>
                    <h3>Connect With Feelings</h3>
                </div>
            </div>

            <div className="right">
                <form className="infoForm signForm" onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "Sign up" : "Log In"}</h3>
                    {isSignUp && (
                        <div>
                            <input
                                type="text"
                                value={data.firstname}
                                placeholder="First Name"
                                className="infoInput"
                                name="firstname"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                value={data.lastname}
                                placeholder="Last Name"
                                className="infoInput"
                                name="lastname"
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    <div>
                        <input
                            type="text"
                            value={data.username}
                            placeholder="User Name"
                            className="infoInput"
                            name="username"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            value={data.password}
                            placeholder="Password"
                            className="infoInput"
                            name="password"
                            onChange={handleChange}
                        />
                        {isSignUp && (
                            <input
                                type="password"
                                value={data.confirmPassword}
                                placeholder="Confirm Password"
                                className="infoInput"
                                name="confirmPassword"
                                onChange={handleChange}
                            />
                        )}
                    </div>
                    <span
                        style={{
                            display: confirmPass ? "block" : "none", // Changed from `confirmpas` to `confirmPass`
                            color: "red",
                            fontSize: "12px",
                            alignSelf: "flex-end",
                            marginRight: "5px"
                        }}
                    >
                        * Confirm Password is not the same
                    </span>
                    <div>
                        <span
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                setIsSignUp(!isSignUp);
                                resetForm();
                            }}
                        >
                            {isSignUp
                                ? "Already have an account? Login!"
                                : "Don't have an account? Signup"}
                        </span>
                    </div>
                    <button className="button info-button" type="submit">
                         { loading ? "Loading..." : isSignUp ? "Signup" : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
