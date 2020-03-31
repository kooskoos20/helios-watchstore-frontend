import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../pages/App';
import ProductDetails from '../pages/ProductDetails';
import NotFound404Page from '../pages/NotFound404Page';

export default function () {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/product/:name" exact component={ProductDetails} />
                <Route component={NotFound404Page} />
            </Switch>
        </Router>
    )
}