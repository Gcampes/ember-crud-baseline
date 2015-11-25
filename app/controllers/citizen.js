import Ember from 'ember';

const {
  A
} = Ember;

export default Ember.Controller.extend({
  columns: new A([{
    contentPath: 'id',
    columnTitle: 'ID'
  },{
    contentPath: 'active',
    columnTitle: 'Active'
  }, {
    contentPath: 'idnumber',
    columnTitle: 'Id number'
  }, {
    contentPath: 'person.stringify',
    columnTitle: 'Name'
  },
  {
    contentPath: 'city.name',
    columnTitle: 'City'
  },
  {
    contentPath: 'template',
    columnTitle: 'Delete',
    template: 'custom/table-actions',
    isSortable: false
  }]),

  definitions: new A([
      {
        attribute: 'model.active',
        label: 'Active',
        type: 'switch'
      },

      {
        attribute: 'model.idnumber',
        label: 'Id Number',
        type: 'text',
        validations:{
          presence: true,
          length: {minimum:5, maximum:10}
        }
      },

      {
        attribute: 'model.person',
        label: 'Person',
        type: 'select',
        selectFunction: function(self){
          self.store.findAll('person');
          return self.store.filter('person', {}, function(item){
            return item.get('active') || self.get('model.person.id') == item.id;
          });
        },
        selectValuePath: 'id',
        selectLabelPath: 'stringify',
        validations:{
          presence: true,
        }
      },

      {
        attribute: 'model.city',
        label: 'City',
        type: 'select',
        selectFunction: function(self){
          self.store.findAll('city');
          return self.store.filter('city', {}, function(item){
            return item.get('active') || self.get('model.city.id') == item.id;
          });
        },
        selectValuePath: 'id',
        selectLabelPath: 'name'
      }
    ])
});
