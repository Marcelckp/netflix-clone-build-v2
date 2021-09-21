import React, { useRef, useState } from 'react';
import './SignInScreen.css';
import { useHistory } from 'react-router-dom';

import { auth } from '../firebase';

function SignUpScreen(props) {

    const history = useHistory()

    const [loading, setLoading] = useState(false);
    const [error, setErrors] = useState(null);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        setLoading(true);
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        ).then((CreatedUser) => {
            console.log(CreatedUser);
            setLoading(false);
        }).catch(error => {
            console.log(error.message)
            setLoading(false);

            if (error.message === 'Password should be at least 6 characters.' || error.message === 'The password must be 6 characters long or more.') setErrors('* Password must be at least 6 characters')
            else if (error.message === 'The email address is badly formatted.') setErrors('* Email has been badly formatted')
            else if (error.message === 'The email address is already in use by another account.') setErrors('* Email is already in use by another account')
            else history.push('/error')
        })

        // console.log(emailRef.current.value, passwordRef.current.value)
    }

    return (
        <div className="signInScreen">
            {loading ? 
                <div className="preloader"></div>
            :
                <form>
                    <h1>Sign Up</h1>
                    {error ? <p className="error"> {error} </p> : null}
                    <input ref={emailRef} placeholder="Enter your email..." type='email' defaultValue={props.email} />
                    <input ref={passwordRef}placeholder='Enter your password' type="password" />
                    <button type="submit" onClick={register}>Sign Up</button>

                    {/* <h4><span className='newToNet'>New to Netflix? </span><span className='signUp4net'>Sign up Now.</span></h4> */}
                </form>
            }
        </div>
    )
}

export default SignUpScreen