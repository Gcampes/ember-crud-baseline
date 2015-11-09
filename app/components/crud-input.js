import Ember from 'ember';

export default Ember.Component.extend({

  selectedErrors: Ember.observer('value', 'model', function(){
    this.set('activeErrors', this.get('errors.'+this.get('name')));
  }),

  value: Ember.computed('name', 'model', {
      set(key, value) {
        this.set(this.get('name'), value);
        return value;
      },
      get: function() {
        return this.get('model').get(this.get('name'));
      }
  })

});
