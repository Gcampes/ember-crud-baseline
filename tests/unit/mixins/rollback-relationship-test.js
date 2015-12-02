import Ember from 'ember';
import RollbackRelationshipMixin from '../../../mixins/rollback-relationship';
import { module, test } from 'qunit';

module('Unit | Mixin | rollback relationship');

// Replace this with your real tests.
test('it works', function(assert) {
  var RollbackRelationshipObject = Ember.Object.extend(RollbackRelationshipMixin);
  var subject = RollbackRelationshipObject.create();
  assert.ok(subject);
});
