import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Dash from '../../src/dashboard/dash.js';
import sear from './sear.css';


class search extends Component {
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
        
            var newpeople = this.state.people.map((people) =>
            <ul key = {people.id} >
        <div className = "profile-name"> {people.first_name} {people.last_name} </div>
        </ul>
        //  {/* <div className = "friend-info-container"> 
        // <img class ="img-rec-friend" src = "preview" /> 
        // <span className = "rec-friend-text"> {this.state.people.} Jimm </span>
        // <button className ="add-friendo"> Add Friend </button>
        // </div>  */}
        )
        return (
            
            <div>
            <Dash/>
            
                <div className = "search-page">
                    <div className = "search-container">
                        <div className = "search-top-container">
                            <div>
                            <select>
                            <option value=""> Select </option>
                            <option value="first_name"> First Name </option>
                            <option value="last_name"> Last Name </option>
                            <option value="gender"> Gender </option>
                            <option value="hair_color"> Hair Color </option>
                            <option value="eye_color"> Eye Color </option>
                            <option value="hobby"> Hobby </option>
                            </select>
                            </div>
                            <div>
                                <input className = "" />
                            </div> 
                            
                                <button className = "search-but"> Search </button>
                                <button className = "reset-but"> Reset </button>
                        </div>
                        <div className = "search-bot-container"> 
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

export default connect(mapStateToProps, {})(search)