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

  actions: {

    deleteRecord(item){
      item.deleteRecord();
      item.save();
    },

    editRecord(item){
      this.transitionTo('city.edit', item);
    }
  }
});
