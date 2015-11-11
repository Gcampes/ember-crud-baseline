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
    contentPath: 'template',
    columnTitle: 'Delete',
    template: 'custom/table-actions'
  }]),

  magicCrud: {
    success: 'City saved successfully',
    routeAfter: 'city'
  },

  definitions: [
    {
      attribute: 'model.name',
      label: 'Name',
      type: 'text'
    },

    {
      attribute: 'model.country',
      label: 'Country',
      type: 'text'
    },

    {
      attribute: 'model.state',
      label: 'State/Province',
      type: 'text'
    }
  ],

  validations: {
   'model.country': {
     presence:true,
     length: {minimum: 5, maximum: 10}
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
