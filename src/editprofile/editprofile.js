import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { first_name, last_name, gender, hair_color, eye_color, hobby, birthday_day, birthday_month, birthday_year } from '../reducer.js';
import Dash from '../../src/dashboard/dash.js';
import edit from './edit.css';


class editprofile extends Component {
    constructor(props){
        super(props);
        this.state = {
            people: [],
        }
        this.profileInfo = this.profileInfo.bind(this)
    }


    componentDidMount(){
        axios.get('/api/workdatserver').then( res => {
            console.log(res.data, "resdata info")
            this.setState({
                people: res.data
            })
        })
    }

    profileInfo(){
        const { 
            first_namestring, last_namestring, genderstring, hair_colorstring,eye_colorstring, hobbystring, birthday_daystring, birthday_monthstring, birthday_yearstring,
        } = this.props
        let body = { first_namestring, last_namestring, genderstring, hair_colorstring,eye_colorstring, hobbystring, birthday_daystring, birthday_monthstring, birthday_yearstring }
            axios.patch('/api/profileInfo', body).then(res => {
                window.location.reload();
                console.log("profile")
            }) 
    }
    render(){

        var newpeople = this.state.people.map((people) =>
            <ul key = {people.id} >
        <div className = "profile-name"> {people.first_name} {people.last_name} </div>
        </ul>
        )

        var newpic = this.state.people.map((people) =>
            <ul key = {people.id} >
            <div>
           <img class = "img-profile" src = {people.profile_picture}/>
           </div>
            </ul>)

        const { 
            first_namestring, last_namestring, genderstring, hair_colorstring,eye_colorstring, hobbystring, birthday_daystring, birthday_monthstring, birthday_yearstring,
            first_name, last_name, gender, hair_color, eye_color, hobby, birthday_day, birthday_month, birthday_year 
        } = this.props;

        return (
        <div>
            <Dash/>
            <div className = "edit-page">
        
                <div className = "edit-container">
                    <div className = "top-edit-container">
                        <div className = "top-left-edit">
                            {newpic}
                            {newpeople}
                        </div>
                        <div className = "top-right-edit">
                            <button className = "edit-update" onClick={() => this.profileInfo()}> Update </button>
                            <button className = "edit-cancel" onClick={() => {window.location.reload()}}> Cancel </button>
                        </div>
                    </div>
                    <div className = "bot-edit-container">
                        <div className = "bot-mid-edit">
                    <div>
                    First Name:
                        <input className = "input-name-edit" onChange={(e) => first_name(e.target.value)} value = { first_namestring } />
                    </div>

                    <div>
                    Last Name: 
                        <input className = "input-name-edit" onChange={(e) => last_name(e.target.value)} value = { last_namestring }/>
                    </div>

                    <div>
                        <span>Gender:</span>
                        <select onChange={(e) => gender(e.target.value)} >
                        { !genderstring ?
                            <option value=""> Select </option> :
                            <option value= {genderstring} > { genderstring } </option>

                        }
                        
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        </select>
                    </div>

                    <div>
                        <span>Hair Color:</span>
                        <select onChange={(e) => hair_color(e.target.value)} >
                        <option value= ""> Select </option>
                        <option value="Blonde">Blonde</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Red">Red</option>
                        <option value="Brown">Brown</option>
                        </select>
                    </div>

                    <div>
                        <span>Eye Color:</span>
                        <select onChange={(e) => eye_color(e.target.value)} >
                        { !eye_colorstring ? 
                        <option value=""> Select </option> :
                        <option value= {eye_colorstring} > {eye_colorstring} </option>
                    }
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Brown">Brown</option>
                        <option value="Hazel">Hazel</option>
                        </select>
                    </div>

                    <div>
                        <span>Hobby:</span>
                        <select onChange={(e) => hobby(e.target.value)} >
                        { !hobbystring ?
                        <option value=""> Select </option> :
                        <option value= {eye_colorstring} > {eye_colorstring} </option>
                        }
                        <option value="Gaming">Gaming</option>
                        <option value="Skiing">Skiing</option>
                        <option value="Golfing">Golfing</option>
                        <option value="Eating">Eating</option>
                        </select>
                    </div>

                    <div>
                    <span>Birthday Day:</span>
                        <select onChange={(e) => birthday_day(e.target.value)} >
                        { !birthday_daystring ? 
                        <option value=""> Select </option>:
                        <option value={birthday_daystring}> {birthday_daystring} </option>}
                        <option value= "1" > 1 </option>
                        <option value= "2" > 2 </option>
                        <option value= "3" > 3 </option>
                        <option value= "4" > 4 </option>
                        <option value= "5" > 5 </option>
                        <option value= "6" > 6 </option>
                        <option value= "7" > 7 </option>
                        <option value= "8" > 8 </option>
                        <option value= "9" > 9 </option>
                        <option value= "10" > 10 </option>
                        <option value= "11" > 11 </option>
                        <option value= "12" > 12 </option>
                        <option value= "13" > 13 </option>
                        <option value= "14" > 14 </option>
                        <option value= "15" > 15 </option>
                        <option value= "16" > 16 </option>
                        <option value= "17" > 17 </option>
                        <option value= "18" > 18 </option>
                        <option value= "19" > 19 </option>
                        <option value= "20" > 20 </option>
                        <option value= "21" > 21 </option>
                        <option value= "22" > 22 </option>
                        <option value= "23" > 23 </option>
                        <option value= "24" > 24 </option>
                        <option value= "25" > 25 </option>
                        <option value= "26" > 26 </option>
                        <option value= "27" > 27 </option>
                        <option value= "28" > 28 </option>
                        <option value= "29" > 29 </option>
                        <option value= "30" > 30 </option>
                        <option value= "31" > 31 </option>
                        </select>
                    </div>

                    <div>
                        <span>Birthday Month:</span>
                        <select onChange={(e) => birthday_month(e.target.value)} >
                        { !birthday_monthstring ?
                        <option value=""> Select </option>:
                        <option value={birthday_monthstring}> {birthday_monthstring} </option>}
                        <option value= "Jan" > Jan </option>
                        <option value= "Feb" > Feb </option>
                        <option value= "Mar" > Mar </option>
                        <option value= "Apr" > Apr </option>
                        <option value= "Aug" > Aug </option>
                        <option value= "Sept" > Sept </option>
                        <option value= "Oct" > Oct </option>
                        <option value= "Nov" > Nov </option>
                        <option value= "Dec" > Dec </option>

                        </select>
                    </div>

                    <div>
                        <span>Birthday Year:</span>
                        <select onChange={(e) => birthday_year(e.target.value)} >
                        { !birthday_yearstring ? 
                        <option value=""> Select </option> :
                        <option value= {birthday_yearstring} > {birthday_yearstring} </option> }
                        <option value= "2017" > 2017 </option>
                        <option value= "2016" > 2016 </option>
                        <option value= "2015" > 2015 </option>
                        <option value= "2014" > 2014 </option>
                        <option value= "2013" > 2013 </option>
                        <option value= "2012" > 2012 </option>
                        <option value= "2011" > 2011 </option>
                        <option value= "2010" > 2010 </option>
                        <option value= "2009" > 2009 </option>
                        <option value= "2008" > 2008 </option>
                        <option value= "2007" > 2007 </option>
                        <option value= "2006" > 2006 </option>
                        <option value= "2005" > 2005 </option>
                        <option value= "2004" > 2004 </option>
                        <option value= "2003" > 2003 </option>
                        <option value= "2002" > 2002 </option>
                        <option value= "2001" > 2001 </option>
                        <option value= "2000" > 2000 </option>
                        <option value= "1999" > 1999 </option>
                        <option value= "1998" > 1998 </option>
                        <option value= "1997" > 1997 </option>
                        <option value= "1996" > 1996 </option>
                        <option value= "1995" > 1995 </option>
                        <option value= "1994" > 1994 </option>
                        <option value= "1993" > 1993 </option>
                        <option value= "1992" > 1992 </option>
                        <option value= "1991" > 1991 </option>
                        <option value= "1990" > 1990 </option>
                        <option value= "1989" > 1989 </option>
                        <option value= "1988" > 1988 </option>
                        <option value= "1988" > 1988 </option>
                        </select>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

function mapStateToProps(state) {
    if (!state) 
    return {}
    const { first_namestring, last_namestring, genderstring, hair_colorstring,eye_colorstring, hobbystring, birthday_daystring, birthday_monthstring, birthday_yearstring } = state;
    return { first_namestring, last_namestring, genderstring, hair_colorstring,eye_colorstring, hobbystring, birthday_daystring, birthday_monthstring, birthday_yearstring 
    }
}

export default connect(mapStateToProps, { first_name, last_name, gender, hair_color, eye_color, hobby, birthday_day, birthday_month, birthday_year } ) (editprofile)