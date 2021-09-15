import React, { useRef } from 'react'
import './SignInScreen.css'

import { auth } from '../firebase';

function SignUpScreen(props) {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        ).then((CreatedUser) => {
            console.log(CreatedUser)
        }).catch(error => {
            alert(error.message)
        })
    }

    return (
        <div className="signInScreen">
            <form>
                <h1>Sign Up</h1>
                <input ref={emailRef} placeholder="Enter your email..." type='email' defaultValue={props.email} />
                <input ref={passwordRef}placeholder='Enter your password' type="password" />
                <button type="submit" onClick={register}>Sign Up</button>

                {/* <h4><span className='newToNet'>New to Netflix? </span><span className='signUp4net'>Sign up Now.</span></h4> */}
            </form>
        </div>
    )
}

export default SignUpScreen
