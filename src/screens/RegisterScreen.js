import React, {useState, useRef} from 'react';
import './RegisterScreen.css'

import SignInScreen from '../components/SignInScreen'
import SignUpScreen from '../components/SignUpScreen'

function RegisterScreen() {

    //react hook
    const [signIn, setSignIn] = useState(false);
    const [signUp, setSignUp] = useState(false);

    const SignUpEmailRef = useRef(null);

    return (
        <div className="RegisterScreen">
            <div className="RegisterScreen-background">
                <img
                className="register-logo" 
                src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" 
                alt="" />
                <button onClick={()=> setSignIn(true)}className="register-button">Sign In</button>
                <div className="register-gradient" />   
            </div>
            <div className="register-body">
                {signIn ? (
                    <SignInScreen />
                    ) : signUp ? (
                        <SignUpScreen email={SignUpEmailRef.current.value} />
                    ) : (
                        <>
                            <h1>Unlimited movies, TV shows, and more.</h1>
                            <h3>Watch anywhere. Cancel anytime.</h3>
                            <p>Ready to watch? Enter you email to create or restart your membership.</p>

                            <div className="RegisterTextF">
                                <form>
                                    <input ref={SignUpEmailRef} type="email" placeholder="Enter your email..."/>
                                    {/*react hook*/}
                                    <button onClick={() => setSignUp(true)} className="registerGetStarted">Sign Up</button>
                                </form>
                            </div>
                        </>
                )}
            </div>
        </div>
    )
}

export default RegisterScreen
