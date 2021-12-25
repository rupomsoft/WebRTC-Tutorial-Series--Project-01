import React, {Component,Fragment} from 'react';
import {Redirect} from "react-router";
import {UserNameRequired} from "../helper/ToastHelper";
import {setName} from "../helper/SessionHelper";

class JoinForm extends Component {

    constructor() {
        super();
        this.state={
            Name:"",
            Redirect:false,
        }
    }


    pageRedirect=()=>{
        if(this.state.Redirect===true){
            return(<Redirect to="/"/>)
        }
    }


    JoinMeeting=()=>{
        let Name=this.state.Name;
        if(Name.length===0){
            UserNameRequired()
        }
        else {
            setName(Name);
            this.setState({Redirect:true})
        }
    }



    render() {
        return (
            <Fragment>
                <div className="center text-center">
                    <h3 className="nav-item">Join Meeting</h3>
                    <input onChange={(e)=>{this.setState({Name:e.target.value})}} placeholder="Your Name" type="text" className="form-control text-center form-rounded mt-3"/>
                    <button onClick={this.JoinMeeting} className="btn w-100 mt-3 btn-rounded btn-primary">Start</button>
                </div>
                {this.pageRedirect()}
            </Fragment>
        );
    }
}

export default JoinForm;