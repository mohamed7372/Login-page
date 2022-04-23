import Button from "./Button";
import Input from "./Input";
import '../../styles/Login.css';

function Signup({ setPage }) {
    return (
        <form action="">
            <h1>Welcome back</h1>
            <p>Welcome back! Please enter your details.</p>

            <Input name='username' id='username' type='text' placehodler='Enter user name'/>
            <Input name='email' id='email' type='email' placehodler='Enter your email'/>
            <Input name='password' id='password' type='password'/>
            <Input name='confirm password' id='cpassword' type='password'/>

            <button className="btn sign">Sign up</button>
            <button className="btn google">
                <img srcSet={ process.env.PUBLIC_URL + '/google.svg' }/>
                Sign up with Google
            </button>
            <p>Do you have an account? <a onClick={()=>setPage(0)}>Sign in</a></p>
        </form>
    );
}

export default Signup;