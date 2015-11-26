import Ember from 'ember';

const {
  A
} = Ember;

export default Ember.Controller.extend({
  tableOptionsMC: new A([{
    contentPath: 'id',
    columnTitle: 'ID',
  }, {
    contentPath: 'name',
    columnTitle: 'Name',
  }, {
    contentPath: 'active',
    columnTitle: 'Status',
  }, {
    contentPath: 'template',
    columnTitle: 'Delete',
    template: 'custom/table-actions',
    isSortable: false
  }]),

  formDefinitionsMC: [{
      attribute: 'model.active',
      label: 'Status',
      type: 'switch'
    }, {
      attribute: 'model.name',
      label: 'Name',
      type: 'text',
      validations:{
        length: {minimum: 5}
      }
    },
  ]
});
