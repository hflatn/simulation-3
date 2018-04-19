import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import login from '../src/login/login.js';
import landing from '../src/landing/landing.js';

export default (
    <Switch>

        < Route component = { login } path = "/" exact />
        < Route component = { landing } path = "/dashboard"/>

    </Switch>
)