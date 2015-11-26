import DS from 'ember-data';

let Person = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  active: DS.attr('boolean'),
  name: Ember.computed('firstName', 'lastName', function(){
    return this.get('firstName') + " " + this.get('lastName');
  }),
  stringify: Ember.computed('name', 'active', function(){
    return this.get('name') + ' - ' + ((this.get('active')) ? 'ativo' : 'inativo');
  })
});

Person.reopenClass({
    FIXTURES: [
        {
            id: 1,
            firstName: "Person",
            lastName: "1",
            active: true
        },
        {
            id: 2,
            firstName: "Person",
            lastName: "2",
            active: false
        },
        {
          id: 3,
            firstName: "Person",
            lastName: "3",
            active: true
        },
        {
          id: 4,
            firstName: "Person",
            lastName: "4",
            active: true
        },
        {
            id: 5,
            firstName: "Person",
            lastName: "5",
            active: false
        },
        {
            id: 6,
            firstName: "Person",
            lastName: "6",
            active: true
        },
        {
            id: 7,
            firstName: "Person",
            lastName: "7",
            active: false
        },
        {
          id: 8,
            firstName: "Person",
            lastName: "8",
            active: true
        },
        {
          id: 9,
            firstName: "Person",
            lastName: "9",
            active: true
        },
        {
            id: 10,
            firstName: "Person",
            lastName: "10",
            active: false
        },
        {
            id: 11,
            firstName: "Person",
            lastName: "11",
            active: true
        },
        {
            id: 12,
            firstName: "Person",
            lastName: "12",
            active: false
        },
        {
          id: 13,
            firstName: "Person",
            lastName: "13",
            active: true
        },
        {
          id: 14,
            firstName: "Person",
            lastName: "14",
            active: true
        },
        {
            id: 15,
            firstName: "Person",
            lastName: "15",
            active: false
        },
        {
            id: 16,
            firstName: "Person",
            lastName: "16",
            active: true
        },
        {
            id: 17,
            firstName: "Person",
            lastName: "17",
            active: false
        },
        {
          id: 18,
            firstName: "Person",
            lastName: "18",
            active: true
        },
        {
          id: 19,
            firstName: "Person",
            lastName: "19",
            active: true
        },
        {
            id: 20,
            firstName: "Person",
            lastName: "20",
            active: false
        },
        {
            id: 21,
            firstName: "Person",
            lastName: "21",
            active: true
        },
        {
            id: 22,
            firstName: "Person",
            lastName: "22",
            active: false
        },
        {
          id: 23,
            firstName: "Person",
            lastName: "23",
            active: true
        },
        {
          id: 24,
            firstName: "Person",
            lastName: "24",
            active: true
        },
        {
            id: 25,
            firstName: "Person",
            lastName: "25",
            active: false
        }
    ]
});

export default Person;
