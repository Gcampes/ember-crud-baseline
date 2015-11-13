import Ember from 'ember';

const {
  A
} = Ember;

export default Ember.Controller.extend({
  columns: new A([{
    contentPath: 'id',
    columnTitle: 'ID'
  }, {
    contentPath: 'name',
    columnTitle: 'Name'
  }, {
    contentPath: 'country',
    columnTitle: 'Country'
  },
  {
    contentPath: 'state',
    columnTitle: 'State/Province'
  },
  {
    contentPath: 'category.name',
    columnTitle: 'Category'
  },
  {
    contentPath: 'template',
    columnTitle: 'Delete',
    template: 'custom/table-actions',
    isSortable: false
  }]),

  magicCrud: {
    routeAfter: 'city'
  },

  definitions: [
    {
      attribute: 'model.name',
      label: 'Name',
      type: 'text',
      validations:{
        presence: true,
        length: {minimum:5, maximum:10}
      }
    },

    {
      attribute: 'model.country',
      label: 'Country',
      type: 'text',
      validations:{
        presense: true,
        length: {minimum: 2}
      }
    },

    {
      attribute: 'model.state',
      label: 'State/Province',
      type: 'text',
      validations:{
        presence: true
      }
    },
  ],
});
