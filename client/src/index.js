import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BaseLayout} from './components/BaseLayout'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {setAuthenticationHeader} from './components/utils/authenticate'
import Login from './components/Login'
import Registration from './components/Registration'

//get the token
let token = localStorage.getItem('jsonwebtoken')
//attach it to the header
setAuthenticationHeader(token)


ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route path='/login' exact component ={Login} />
                <Route path='/register' component={Registration} />
            </Switch>
        </BaseLayout>
    </BrowserRouter>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
