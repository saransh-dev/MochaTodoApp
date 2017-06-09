import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import AppItem from './AppItem';
import { Message } from '../api/Message.js';
// App component - represents the whole app
class App extends Component {
    handleSubmit(event) {
        event.preventDefault();
        let message = $('#textInput').val();
        console.log(message)
        Message.insert({
            message:message,
            createdAt: new Date(), 
            userId:Meteor.userId()
        });
        $('#textInput').val('');
    }
    remove(id){
            Meteor.call('remove', id, (err,res)=>{
                if(err || !res){
                    window.alert("error :- "+err)
                }else{
                    window.alert("remove successfully ")
                }
            })
    }
    logout(){
        Meteor.logout((err)=>{
            if(err){
                window.alert("error:- "+err);
            }else{
                this.props.history.push('/');
            }
        });
    }
    render() {
       return (
            <div className="container">
                <header>
                        <h1>Todo List</h1>
                    <a type="button" className="pull-right btn btn-primary btn-sm" onClick={()=>{this.logout()}}>
                        logout
                    </a>
                </header>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                    <input type="text" ref={(c) => { this.textInput = c; }} defaultValue={this.props.list && this.props.list.message?this.props.list.message:''} className="message" id="textInput" placeholder="Type to add new message"/>
                </form>
                <ul key={this.props.isReady}>
                    { 
                        this.props.message.length!=0?
                            this.props.message.map((message, index)=>{
                                return <AppItem key={message._id} messageId={message._id} />
                            })
                        :
                            ''
                    }
                </ul>
            </div>
        );
    }
}
App.propTypes = {
  list: React.PropTypes.object,
};

export default createContainer(() => {
    let handle = Meteor.subscribe('message');
    return {
        isReady: handle.ready(),
        message: Message.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
}, App);