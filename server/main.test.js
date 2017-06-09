
import { Meteor } from 'meteor/meteor';
import {Message} from '../imports/api/Message.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { assert } from 'meteor/practicalmeteor:chai';
import './main.js';
import { Random } from 'meteor/random';


// CHECK THE PUBLICATION IS SUCCESSFULLY OR NOT
describe('message publications', function () {
  beforeEach(function () {
    Message.remove({});
    Message.insert({
      message: 'meteor homepage',
      createdAt: new Date(),
       userId : Random.id()
    });
  });

  describe('message', function () {
    it('sends all message', function (done) {
      const collector = new PublicationCollector();
      collector.collect('message', (collections) => {
        assert.equal(collections.message.length, 1);
        done();
      });
    });
  });
});