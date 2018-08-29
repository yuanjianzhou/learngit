import * as React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Layout from '../../layout/index';
import centralChinaPage from '../centralChina/index';
import cityPage from '../centralChina/city';

const isLogin = (nextState, replace, callback) => {
        callback()
}

const Root = () => (
    <Router history={hashHistory}>
        <Route path="/" onEnter={isLogin} component={Layout}>
            <Route path="locatedChina/:located" component={centralChinaPage} />
            <Route path="city" component={cityPage} />
        </Route>
    </Router>
);


export default Root;