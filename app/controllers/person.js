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
  }, {
    contentPath: 'active',
    columnTitle: 'Active'
  },
  {
    contentPath: 'template',
    columnTitle: 'Delete',
    template: 'custom/table-actions',
    isSortable: false
  }]),

  definitions: [
    {
      attribute: 'model.active',
      label: 'Situação',
      type: 'switch'
    },

    {
      attribute: 'model.firstName',
      label: 'Primeiro Nome',
      type: 'text',
      validations:{
        presence: true,
        length: {minimum: 5},
      }
    },

    {
      attribute: 'model.lastName',
      label: 'Sobrenome',
      type: 'text',
      validations:{
        length: {minimum: 2}
      }
    },
  ]
});
