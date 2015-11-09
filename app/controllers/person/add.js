import Ember from 'ember';
import EmberValidations from 'ember-validations';
import MagicCrud from 'ember-imdt-crud/mixins/ember-imdt-magic-crud';

export default Ember.Controller.extend(EmberValidations, MagicCrud, {
  routeAfter: 'person',
  definitions: [
    {
      value: 'model.firstName',
      label: 'Primeiro Nome',
      type: 'text'
    },

    {
      value: 'model.lastName',
      label: 'Sobrenome',
      type: 'text'
    }
  ],

  validations: {
   'model.firstName': {
     length: {minimum: 5}
   },

   'model.lastName':{
     length: {minimum: 2}
   }
  },
});
