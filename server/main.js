import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks.js';


import {Message} from '../imports/api/Message.js';
// import {CustomField} from '../imports/collections/CustomField.js';


Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.publish('message', function () {
    return Message.find();
});


