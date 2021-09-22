import React, {useEffect} from 'react';
import  {BrowserRouter, Route, Switch} from 'react-router-dom';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';


// screens / app pages
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import FAQ from './screens/faqform.js';
import notFound from './screens/notFound';
import ErrorScreen from './screens/ErrorScreen';
import WatchScreen from './screens/WatchScreen';
import MyList from './screens/MyListScreen/MyList';

//components
import Footer from './components/Footer'

function App() {
    const user = useSelector(selectUser) || null;
    const dispatch = useDispatch()

    useEffect(() => {
        //this is a listener that will listen for firebase changes/ authenticated state change as done in SignInScreen.js so with this every time you refresh the authenticated state will be saved to your browser memory && returns a user auth call back
        const unsubscribe = auth.onAuthStateChanged( user => {
            if (user) {
                //logged in
                // console.log(user);
                                
                dispatch(login({              //
                    uid: user.uid,           //  redux login 
                    email: user.email       //  payload
                }))                        //

            } else {
                //log out
                dispatch(logout());
            }
        })
        //the same as saying when it cleans up run the function ie)
        /**
         * return () => {
         *    unsubscribe
         * }
         * which saves computing power and boosts performance
        */
        return unsubscribe
    },[dispatch])

    console.log(user);


    return ( 
        <div className = "app">
            <BrowserRouter>
                {!user ? (
                    <RegisterScreen />
                ) : (
                    <>
                        <Switch>
                            <Route exact path='/' render={() => <HomeScreen />} />
                            <Route path='/profile' render={() => <ProfileScreen />} />
                            <Route path='/faq' render={() => <FAQ />}/>
                            <Route path='/watch/:id' render={(props) => <WatchScreen {...props} />} />
                            <Route path='/error' render={() => <ErrorScreen />} />
                            <Route path='/mylist' render={() => <MyList />} />
                            <Route path='/notFound' component={notFound} />
                            <Route component={notFound} />
                        </Switch>
                        <Footer />
                    </>
                )}             
            </BrowserRouter>
        </div>
    );
}

export default App;