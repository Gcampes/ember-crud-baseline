import Ember from 'ember';

const {
  A
} = Ember;

export default Ember.Controller.extend({
  columns: new A([{
    contentPath: 'id',
    columnTitle: 'ID',
  }, {
    contentPath: 'firstName',
    columnTitle: 'First Name'
  }, {
    contentPath: 'lastName',
    columnTitle: 'Last Name'
  },
  {
    contentPath: 'template',
    columnTitle: 'Delete',
    template: 'custom/table-actions'
  }]),

  validations: {
   'model.firstName': {
     length: {minimum: 5}
   },

   'model.lastName':{
     length: {minimum: 2}
   }
  },

  definitions: [
    {
      attribute: 'model.firstName',
      label: 'Primeiro Nome',
      type: 'text'
    },

    {
      attribute: 'model.lastName',
      label: 'Sobrenome',
      type: 'text'
    }
  ],

  magicCrud: {
    success: 'Person added successfully',
    routeAfter: 'person'
  },
});
