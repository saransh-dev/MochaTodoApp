import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';

export default class Register extends Component {
    handleSubmit(event) {
        event.preventDefault();
        let email = $('#email').val();
        let password = $('#password').val();
        let cpassword = $('#cpassword').val();
        if(password != cpassword){
            window.alert("Password not match");
        }else{
            let data={
                email:email,
                password:password
            };
            Accounts.createUser(data,(err)=>{
                if(err){
                    window.alert("error :- "+err);
                }else{
                    $('#email , #password, #cpassword').val('');
                     this.props.history.push('/');
                }
            })
        }
    }
    render() {
       return (
            <section className="login-info">
                <div className="container">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="row main">
                            <div className="form-header">
                                <h1 className="text-center ">Register form </h1>
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
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock" aria-hidden="true"></span>
                                    </span>
                                    <input id="cpassword" type="password" className="form-control" name="password" placeholder="Enter your Password Again" />
                                </div>
                            </div>
                            <div className="form-group ">
                                <button type="submit"  className="btn btn-primary btn-space">Register</button>
                                <a type="button" className="btn btn-danger" href="/"> Cancle </a>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}


