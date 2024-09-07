import React from "react";
import './Login.css'
const Login = () =>{
    return(
<div className="Login">

    <div className="s-left">
        <div className="appname">
            <h1>Mongo Talk</h1>
            <h3>Connect With Felings</h3>
        </div>
    </div>

    <SignIn/>

</div>
    )
}

function SignUp(){
    return(
        <div className="right">
            <form action="" className="infoFrom signForm">
                <h3>Sign up</h3>
                <div> 
                <input type="text" placeholder="First Name" className="infoInput" name="firstname"/>
                <input type="text" placeholder="Last Name" className="infoInput" name="lastname"/>
                </div>
                <div>
                <input type="text" placeholder="User Name" className="infoInput" name="username"/>
                </div>
                <div> 
                <input type="text" placeholder="Password" className="infoInput" name="firstname"/>
                <input type="text" placeholder="confirm Password" className="infoInput" name="confirmPassword"/>
                </div>
                <div>
                    <span>Already have an account. Login!</span>
                </div>
                <button className="button info-button" type="submit">Signup</button>
            </form>
        </div>
    )
}


function SignIn(){
    return(
        <div className="right">
            <form action="" className="infoFrom signForm">
                <h3>Log In</h3>
                <div> 
                <input type="text" placeholder="User Id" className="infoInput" name="User Name"/>
                </div>
                <div>
                <input type="text" placeholder="Password" className="infoInput" name="password"/>
                </div>
               
                <div>
                    <span>Don't Have an account Sign up</span>
                    <button className="button info-button" type="submit">LogIn</button>
                </div>
               
            </form>
        </div>
    )
}

export default Login;