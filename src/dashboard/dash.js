import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import dashy from './dash.css';
import home from '../../src/assets/home.png'
import search from '../../src/assets/search.png';

class dash extends Component {
    constructor(props){
        super(props); 
    }





    render() {
    
    
    return(
        
            <div className = "dash-dashboard">
                <div className = "dash-icon"> Helo 
                <Link to = '/dashboard'>  <img class="img-icon" src = { home }/> </Link> 
                <Link to = '/search'> <img class="img-icon" src = { search }/> </Link>
                 </div>
                <div className = "dash-icon"> Dashboard </div>
                <a className = "dash-logout" href="https://first-tenny.auth0.com/v2/logout?returnTo=http://localhost:3000/#/"> Logout </a>
            </div>
        
    )
    }
}

function mapStateToProps(state) {
    if (!state) return {};
    return {}
}

export default connect(mapStateToProps, {})(dash)

