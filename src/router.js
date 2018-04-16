import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import login from '../src/login/login.js';
import dash from '../src/dashboard/dash.js';

export default (
    <Switch>

        < Route component = { login } path = "/" exact />
        < Route component = { dash } path = "/dashboard"/>

    </Switch>
)