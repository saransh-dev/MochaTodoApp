import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { mount } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import App from './App.jsx';
import AppItem from './AppItem.jsx';
import {Message} from '../api/Message.js';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { Random } from 'meteor/random';

import {remove} from '../api/tasks.js';


if (Meteor.isClient) {
	//  USING 3 TEST CASES
    
  describe('Client Side Process',()=>{
    let messageId = null;
    let header;
    let userId = Random.id();

    // CHECK WEB PAGE IS RENDER OR NOT
    describe('Form Render',()=>{
  		it('should render', () => {
        const item = mount(<App  />);
        chai.assert(item.find('input[type="text"]').hasClass('message'));
      });
    });

    // CHECK INSERTATION
    describe('Insertation',()=>{
      beforeEach( ()=> {
        Factory.define('message', Message,{ message: 'testing', userId:userId });
        const list =  Factory.create('message');
        messageId = list._id;
      });

      it('should insert',()=>{
        assert.equal(Message.find().count(), 1);
      })
    })


    // CHECK LIST IS RENDER OR NOT
    describe('List Render',()=>{
      it('should list render',()=>{
        const item = mount(<App  />);
        console.log(item.find('li').length)
        assert.equal(item.find('li').length,1);
      })
    })

   

	});


}
