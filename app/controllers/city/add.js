import Ember from 'ember';
import EmberValidations from 'ember-validations';
import MagicCrud from 'ember-imdt-crud/mixins/ember-imdt-magic-crud';

export default Ember.Controller.extend(EmberValidations, MagicCrud, {
  definitions: [
    {
      value: 'model.name',
      label: 'Name',
      type: 'text'
    },

    {
      value: 'model.country',
      label: 'Country',
      type: 'text'
    },

    {
      value: 'model.state',
      label: 'State/Province',
      type: 'text'
    }
  ],

  validations: {
   'model.country': {
     presence:true,
     length: {minimum: 5}
   },

   'model.name':{
     presence:true,
     length: {minimum: 2}
   },

   'model.state':{
     presence:true
   }
  },
});
