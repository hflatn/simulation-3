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
            people: [],
            friend: []
        }
    }

    componentDidMount(){
        console.log( )
        axios.get(`/api/search/${this.props.match.params.pg}`).then( res => {
            console.log(res.data, "resdata info")
            this.setState({
                friend: res.data
            })
        })
    }

    render(){
        
            var newpeople = this.state.friend.map((friend) =>
            <ul key = {friend.id} >
        <img class ="img-rec-friend" src = "preview" /> 
        <span className = "rec-friend-text">  {friend.first_name} {friend.last_name}  </span>
        <button className ="add-friendo"> Add Friend </button> 
        </ul> 
         )

        //                         <div className = "friend-info-container"> 
        //                     <img class ="img-rec-friend" src = "preview" /> 
        //                     <span className = "rec-friend-text">  Jimm </span>
        //                     <button className ="add-friendo"> Add Friend </button>
        //                     </div> 
    
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
                            </select>
                            </div>
                            <div>
                                <input className = "" />
                            </div> 
                            
                                <button className = "search-but"> Search </button>
                                <button className = "reset-but"> Reset </button>
                        </div>

                        <div className = "search-bot-container">
    
                        {newpeople}
                    
                        </div>

                        <button> Button </button>

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