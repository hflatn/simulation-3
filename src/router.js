import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import login from '../src/login/login.js';
import landing from '../src/landing/landing.js';
import editprofile from '../src/editprofile/editprofile.js';
import search from '../src/search/search.js';

export default (
    <Switch>

        < Route component = { login } path = "/" exact />
        < Route component = { landing } path = "/dashboard"/>
        < Route component = { editprofile } path = "/editprofile"/>
        < Route component = { search } path = "/search/:pg"/>

    </Switch>
)