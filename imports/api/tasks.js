import {Message} from './Message.js';
import { ValidatedMethod } from 'meteor/mdg:validated-method';


Meteor.methods({
	'remove':function(id){
		Message.remove({_id:id});
		return true;
	}
});





export const remove = (id)=>{
	Message.remove({_id:id});
	return true;
}


// export const insert = new ValidatedMethod({
//   name: 'message.remove',
//   validate: MessageID,
//   run({ messageId }) {
    

//     Lists.remove(messageId);
//   },
// });