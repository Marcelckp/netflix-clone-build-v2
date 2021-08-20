import React from 'react';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import  {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
    // const user=null;
    return ( 
        <div className = "app">
            <BrowserRouter>
                {/* {!user ? ( */}
                    <RegisterScreen />
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