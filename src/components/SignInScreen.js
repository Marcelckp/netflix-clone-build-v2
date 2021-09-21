import React, {useRef, useState} from 'react'
import './SignInScreen.css';
// import RegisterScreen from '../screens/RegisterScreen';

//explicit export
import { auth } from '../firebase';

function SignInScreen() {

    const [loading, setLoading] = useState(false)
    const [error, setErrors] = useState(null)

    //react ref hook
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const signIn = (e) => {
        e.preventDefault()
        setLoading(true);
        // if (!emailRef.current.value && !passwordRef.current.value) setErrors(['* Please enter a value for email & password']);
        //     else if (!emailRef.current.value) setErrors(['* Please enter a email value']);
        //     else if (!passwordRef.current.value) setErrors(['* Please enter a password value']);
        //     else if (passwordRef.length < 6) setErrors(['* Password Value must be at least 6 characters long'])
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        ).then((res) => {
            console.log(res);
            setLoading(false);
        }).catch((err) => {
            console.log(err.message,err);
            setLoading(false);

            if (err.message === "There is no user record corresponding to this identifier. The user may have been deleted.") setErrors(['* No User was found try sign-in again']);
            else if (err.message === 'The email address is badly formatted.') setErrors(['* Email has been badly formatted']);
            else if (err.message === 'The password is invalid or the user does not have a password.') setErrors(['* Password has been badly formatted'])
        })
    }


    return ( 
        
        <div className="signInScreen">
            {loading ? 
                <div className="preloader"></div>
            :
                <form>
                    <h1>Sign In</h1>
                    {error ? <p className="error"> {error} </p> : null}
                    <input ref={emailRef} placeholder="Enter your email..." type='email' />
                    <input ref={passwordRef}placeholder='Enter your password' type="password" />
                    <button type="submit" onClick={signIn}>Sign In</button>

                    {/* <h4><span className='newToNet'>New to Netflix?  </span><span className='signUp4net' onClick={() =><RegisterScreen />}>Sign up Now.</span></h4> */}
                </form>
            
            }     
        </div>
    )
}

export default SignInScreen