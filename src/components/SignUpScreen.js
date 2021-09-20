import React, { useRef, useState } from 'react'
import './SignInScreen.css'

import { auth } from '../firebase';

function SignUpScreen(props) {

    const [loading, setLoading] = useState(false)

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        setLoading(true);
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        ).then((CreatedUser) => {
            console.log(CreatedUser)
            setLoading(false);
        }).catch(error => {
            alert(error.message)
            setLoading(false);
        })
    }

    return (
        <div className="signInScreen">
            {loading ? 
                <p>Loading...</p>
            :
                <form>
                    <h1>Sign Up</h1>
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