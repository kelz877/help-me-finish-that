import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BaseLayout} from './components/BaseLayout'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {setAuthenticationHeader} from './components/utils/authenticate'
import reducer from './components/store/reducer'
import {createStore} from 'redux'
import Login from './components/Login'
import Registration from './components/Registration'
import ProductDisplay from './components/ProductDisplay'
import AddProduct from './components/AddProduct';
import ProductDetails from './components/ProductDetails'
import { ComingSoon } from './components/ComingSoon';
import UserProductDisplay from './components/UserProductDisplay'
import UpdateProduct from './components/UpdateProduct';
import RequireAuth from './components/RequireAuth'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//get the token
let token = localStorage.getItem('jsonwebtoken')
//attach it to the header
setAuthenticationHeader(token)


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <BaseLayout>
                <Switch>
                    <Route path='/login' exact component ={Login} />
                    <Route path='/register' component={Registration} />
                    <Route path='/product-display' component={RequireAuth(ProductDisplay)} />
                    <Route path='/user-products' component={RequireAuth(UserProductDisplay)} />
                    <Route path='/add-product' component={RequireAuth(AddProduct)} />
                    <Route path='/product/product-details/:id' component={RequireAuth(ProductDetails)} />
                    <Route path='/coming-soon' component={RequireAuth(ComingSoon)} />
                    <Route path='/product/update-product/:id' component={RequireAuth(UpdateProduct)} />
                </Switch>
            </BaseLayout>
        </BrowserRouter>
    </Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
