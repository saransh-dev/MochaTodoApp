import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';

export default class Login extends Component {
    handleSubmit(event) {
        event.preventDefault();
        var Router = require('react-router');
        let email = $('#email').val();
        let password = $('#password').val();
     
        Meteor.loginWithPassword(email, password, (err)=>{
            if(err){
                window.alert('error:- '+err);
            }else{
                $('#email , #password').val('');
                this.props.history.push('/app');
                console.log(this.props)
            }
        });
    }
    render() {
       return (
            <section className="login-info">
                <div className="container">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="row main">
                            <div className="form-header">
                                <h1 className="text-center ">Login form </h1>
                            </div>
                            <div className="main-content">
                        
                                <div className="input-group ">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
                                    </span>
                                    <input id="email" type="text" className="form-control" name="email" placeholder="Enter your Email" />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock" aria-hidden="true"></span>
                                    </span>
                                    <input id="password" type="password" className="form-control" name="password" placeholder="Enter your Password" />
                                </div>
                            </div>
                            <div className="form-group ">
                                <button type="submit"  className="btn btn-primary btn-space">Login</button>
                                <a type="button" className="btn btn-success" href="/register"> Register </a>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}


