import { Mongo } from 'meteor/mongo';
 
export const Message = new Mongo.Collection('message');


Message.allow({
  	insert: function(doc) {
    	// only allow posting if you are logged in
    	return true;
  	}
});