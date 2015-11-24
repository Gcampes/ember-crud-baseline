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
    contentPath: 'person.name',
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

  definitions: [
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
      selectContent: 'person',
      selectValuePath: 'id',
      selectLabelPath: 'name',
      validations:{
        presence: true,
      }
    },


    {
      attribute: 'model.city',
      label: 'City',
      type: 'select',
      selectContent: 'city',
      selectValuePath: 'id',
      selectLabelPath: 'name'
    }
  ]
  //
  //   {
  //     attribute: 'model.city.name',
  //     label: 'Country',
  //     type: 'text',
  //     validations:{
  //       presense: true,
  //       length: {minimum: 2}
  //     }
  //   },
  //
  //   {
  //     attribute: 'model.state',
  //     label: 'State/Province',
  //     type: 'text',
  //     validations:{
  //       presence: true
  //     }
  //   },
  // ],
});
