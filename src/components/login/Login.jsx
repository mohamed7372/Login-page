import Button from "./Button";
import Input from "./Input";
import '../../styles/Login.css';

function Login() {
    return (
        <div className="login">
            <form action="">
                <h1>Welcome back</h1>
                <p>Welcome back! Please enter your details.</p>

                <Input name='email' id='email' type='email' placehodler='Enter your email'/>
                <Input name='password' id='password' type='password'/>

                <div className="plus">
                    <div>
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember for 30 days</label>
                    </div>
                    <p>Forgot password</p>
                </div>

                <button className="btn sign">Sign in</button>
                <button className="btn google">
                    <img srcSet={ process.env.PUBLIC_URL + '/google.svg' }/>
                    Sign in with Google
                </button>
                <p>Don't have an account? <a href="">Sign up</a></p>
            </form>
            <div className="img">
                <div><div className="circle cir1"></div></div>
                <div><div className="circle cir2"></div></div>
            </div>
        </div>
    );
}

export default Login;