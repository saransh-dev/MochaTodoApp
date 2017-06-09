import { Message } from './Message.js';
import { Random } from 'meteor/random';

if (Meteor.isServer) {


  // CHECK MESSAGE COLLECTION IS SUCCESSFULLY OR NOT
  describe('message collection', function () {
    it('insert message correctly', function () {
      const messageId = Message.insert({
        post: 'meteor homepage',
        createdAt: new Date(),
        userId : Random.id()
      });
      const checkMessage = Message.find({ _id: messageId });
      const messageCollection = checkMessage._getCollectionName();
      const count = checkMessage.count();

      assert.equal(messageCollection, 'message');
      assert.equal(count, 1);
    });
  });
}