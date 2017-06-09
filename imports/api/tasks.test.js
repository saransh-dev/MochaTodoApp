import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Message } from './Message.js';
import './tasks.js';
import { Random } from 'meteor/random';

if (Meteor.isServer) {

//  CHECK MESSAGE IS DELETE SUCCESSFULLY OR NOT

  describe('message methods', function () {
    let messageId;
    beforeEach(function () {
      Message.remove({});
      messageId = Message.insert({
        message: 'meteor homepage',
        createdAt: new Date(),
        userId : Random.id()
      });
    });
 

    it('can delete all messages', function () {
      const deleteMessage = Meteor.server.method_handlers['remove'];
      deleteMessage.apply({}, [messageId]);

      assert.equal(Message.find().count(), 0);
    });
  });
}
