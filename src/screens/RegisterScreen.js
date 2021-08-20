import React, {useState, useEffect} from 'react';
import './RegisterScreen.css'
import SignInScreen from '../components/SignInScreen'

function RegisterScreen() {

    //react hook
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="RegisterScreen">
            <div className="RegisterScreen-background">
                <img
                className="register-logo" 
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt="" />
                <button onClick={()=> setSignIn(true)}className="register-button">Sign In</button>
                <div className="register-gradient" />   
            </div>
            <div className="register-body">
                {signIn ? (
                    <SignInScreen />
                    ) : (
                    <>
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <h3>Watch anywhere. Cancel anytime.</h3>
                        <p>Ready to watch? Enter you email to create or restart your membership.</p>

                        <div className="RegisterTextF">
                            <form>
                                <input type="email" placeholder="Enter your email..."/>
                                {/*react hook*/}
                                <button onClick={() => setSignIn(true)} className="registerGetStarted">Get Started ></button>
                            </form>
                        </div>
                    </>
                    )}
            </div>
        </div>
    )
}

export default RegisterScreen
