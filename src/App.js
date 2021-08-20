import React, {useEffect} from 'react';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import  {BrowserRouter, Route, Switch} from 'react-router-dom';
import { auth } from './firebase';

function App() {
    const user=null;

    useEffect(() => {
        //this is a listener that will listen for firebase changes/ authenticated state change as done in SignInScreen.js so with this every time you refresh the authenticated state will be saved to your browser memory && returns a user auth call back
        const unsubscribe = auth.onAuthStateChanged( user => {
            if (user) {
                console.log(user);
            } else {

            }
        })
//equalivent to saying when it cleans up run the function ie)
/**
 * return () => {
 *    unsubscribe
 * }
 * which saves computing power and boosts performance
*/
        return unsubscribe
    },[])
    return ( 
        <div className = "app">
            <BrowserRouter>
                {/* {!user ? ( */}
                    {/* <RegisterScreen /> */}
                {/* ) : ( */}
                    <Switch>
                        <Route exact path='/home' render={(() => <HomeScreen />)} />
                        <Route exact path='/' render={(() => <RegisterScreen />)} />
                    </Switch>
                {/* )}              */}
            </BrowserRouter>
        </div>
    );
}

export default App;