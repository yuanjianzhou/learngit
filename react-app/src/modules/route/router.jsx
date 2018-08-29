import  React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Layout from '../layout/index';
import TourPage from '../pages/bookingReport';
import LoginPage from '../pages/login/login';
import FormTestPage from '../pages/form/formTest';

const isLogin=(nextState,replace,callback)=>{
    if(localStorage.userName){
        callback()
    }else {
        replace('/login');
        callback()
    }
}

const Root = () => (
    <Router history={hashHistory}>
        <Route path="/" onEnter={isLogin} component={Layout}>
            <Route path="tour" component={TourPage} />
            <Route path="form" component={FormTestPage} />
        </Route>
        <Route path="/login" component={LoginPage} />
    </Router>
);


export default Root;