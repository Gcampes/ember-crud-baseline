import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    saveRecord(){
      let flashMessages = Ember.get(this, 'flashMessages');

      this.model.save().then(function(){
        flashMessages.success('Successfully saved record');
      }, function(){
        flashMessages.warning('Error saving record');
      });
    }
  }
});
