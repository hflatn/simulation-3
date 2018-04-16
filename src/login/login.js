import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import log from './log.css';
import smile from '../../src/assets/smileyface.png';

class login extends Component {
    constructor(props){
        super(props); 
    }




    render() {
    
    
    return(
        <div className = "login-back"> 

            <div className = "helo-box">

                <div className = "helo-top-half">
                    <img class = "helo-img" src= {smile} />
                    <span className = "helo-text"> Helo  </span>
                </div>
            
                <div className = "helo-bot-half">

                    <div className = "login-container">

                    <a href="http://localhost:3333/auth/"> Login / Register </a>

                    </div>
                
                </div>
            </div>
        
         </div>
    )
    }
}

function mapStateToProps(state) {
    if (!state) return {};
    return {}
}

export default connect(mapStateToProps, {})(login)