import React, {useRef} from 'react'
import './SignInScreen.css';

//explicit export
import { auth } from '../firebase';

function SignInScreen() {

 
    //react ref hook
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

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        ).then((res) => {
            console.log(res)
        }).catch((err) => {
            alert(err.message)
        })
    }

    return ( 
        <div className="signInScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Enter your email..." type='email' />
                <input ref={passwordRef}placeholder='Enter your password' type="password" />
                <button type="submit" onClick={signIn}>Sign In</button>

                <h4><span className='newToNet'>New to Netflix?  </span><span className='signUp4net' onClick={register}>Sign up Now.</span></h4>
            </form>
        </div>
    )
}

export default SignInScreen