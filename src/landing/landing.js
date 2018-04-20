import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Dash from '../../src/dashboard/dash.js';
import land from './landing.css';


class landing extends Component {
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
        </ul>)

            var newpic = this.state.people.map((people) =>
            <ul key = {people.id} >
            <div>
           <img class = "img-profile" src = {people.profile_picture}/>
           </div>
            </ul>)
        //  {/* <div className = "friend-info-container"> 
        // <img class ="img-rec-friend" src = "preview" /> 
        // <span className = "rec-friend-text"> {this.state.people.} Jimm </span>
        // <button className ="add-friendo"> Add Friend </button>
        // </div>  */}
        
        return (
            
            <div className = "landing-page">
            <Dash/>
                <div className = "top-container">
                    <div className = "profile-container">
                        {newpic}
                        <div className = "second-container">
                        <div className = "profile-name"> {newpeople} </div>
                       <Link to='/editprofile'> <button className = "edit-profile"> Edit Profile </button> </Link>
                        </div>
                    </div>
                    <div className = "description-container"> 
                        <span className="description-text">  Welcome to Helo! </span>
                    </div>
                </div>

                <div className = "bot-container">
                <div className = "friend-container">
                    <div className = "top-friend-container">
                        <span> Recommended Friends </span> <div> scroll </div>     
                     </div>
                     <div className = "rec-friend-container">
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

export default connect(mapStateToProps, {})(landing)