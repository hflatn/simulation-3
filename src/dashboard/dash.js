import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class dash extends Component {
    constructor(props){
        super(props); 
    }





    render() {
    
    
    return(
        <div> dash page
        <a href="https://first-tenny.auth0.com/v2/logout?returnTo=http://localhost:3000/#/"> Logout </a>
        </div>
    )
    }
}

function mapStateToProps(state) {
    if (!state) return {};
    return {}
}

export default connect(mapStateToProps, {})(dash)