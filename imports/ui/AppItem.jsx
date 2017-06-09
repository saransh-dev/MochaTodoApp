import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';


import { Message } from '../api/Message.js';
// App component - represents the whole app
class AppItem extends Component {
    remove(id){
            Meteor.call('remove', id, (err,res)=>{
                if(err || !res){
                    window.alert("error :- "+err)
                }else{
                    window.alert("remove successfully ")
                }
            })
    }
    render() {
        if(this.props.message){
            return (
                <li className="list">
                    {this.props.message.message}
                    {
                        this.props.message.userId == Meteor.userId()?
                            <span className="pull-right remove" onClick={()=>{this.remove(this.props.message._id)}}>
                                <i className="fa fa-times " aria-hidden="true"></i>
                            </span>
                        :
                            <span className="pull-right readOnly" >
                                Read Only
                            </span>
                    }
                    
                </li>
            );
        }else{
            return <div></div>
        }
    }
}


export default createContainer((data) => {
    let handle = Meteor.subscribe('message');
    return {
        isReady: handle.ready(),
        message: Message.findOne({_id:data.messageId}),
    };
}, AppItem);