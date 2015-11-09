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

  actions: {

    deleteRecord(item){
      item.deleteRecord();
      item.save();
    },

    editRecord(item){
      this.transitionTo('person.edit', item);
    }
  }
});
