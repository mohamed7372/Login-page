import axios from "axios";
import { useState, useEffect} from "react";

import Button from "./Button";
import Input from "./Input";

import '../../styles/Login.css';

function Login({ setPage }) {
    const [email,setemail] = useState(localStorage.getItem('email'))
    const [pwd, setpwd] = useState(localStorage.getItem('pwd'))
    const [check, setcheck] = useState(localStorage.getItem('check'))

    function login() {
        console.log(pwd);
        if (check == 1) {
            localStorage.setItem('email', email) 
            localStorage.setItem('pwd', pwd)
            localStorage.setItem('check', check)
        }
        else {
            localStorage.setItem('email', '') 
            localStorage.setItem('pwd', '')
            localStorage.setItem('check', 0)
        }
    }

    return (
        <form action="">
            <h1>Welcome back</h1>
            <p>Welcome back! Please enter your details.</p>

            <Input name='email' id='email' type='email' placehodler='Enter your email' att={email} setatt={setemail}/>
            <Input name='password' id='password' type='password' att={pwd} setatt={setpwd}/>

            <div className="plus">
                <div>
                    {/* {setcheck(localStorage.getItem('check'))} */}
                    <input checked={'checked' && check == 1} type="checkbox" name="remember" id="remember" onChange={(e)=> e.target.checked ? setcheck(1) : setcheck(0)}/>
                    <label htmlFor="remember">Remember for 30 days</label>
                </div>
                <p>Forgot password</p>
            </div>

            <div className="btn sign" onClick={login}>Sign in</div>
            <div className="btn google">
                <img srcSet={ process.env.PUBLIC_URL + '/google.svg' }/>
                Sign in with Google
            </div>
            <p>Don't have an account? <a onClick={()=>setPage(1)}>Sign up</a></p>
        </form>
    );
}

export default Login;