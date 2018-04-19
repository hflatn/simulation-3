import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Dash from '../../src/dashboard/dash.js';



class editprofile extends Component {
    constructor(props){
        super(props);
        this.state = {
            people: []
        }
    }


    componentDidMount(){
        axios.get('/api/workdatserver').then( res => {
            console.log(res.data, "resdata info")
            this.setState({
                people: res.data
            })
    
        })
    
    }

    render(){
        
         
        return (
            
            <div>
            <Dash/>
                
                
            </div>
           
        )
    }
}

function mapStateToProps(state) {
    if (!state) return {};
    return {}
}

export default connect(mapStateToProps, {})(editprofile)