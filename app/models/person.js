import DS from 'ember-data';

let Person = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  active: DS.attr('boolean'),
  name: Ember.computed('firstName', 'lastName', function(){
    return this.get('firstName') + " " + this.get('lastName');
  })
});

Person.reopenClass({
    FIXTURES: [
        {
            id: 1,
            firstName: "Person",
            lastName: "11",
            active: true
        },
        {
            id: 2,
            firstName: "Person",
            lastName: "22",
            active: false
        },
        {
          id: 3,
            firstName: "Person",
            lastName: "33",
            active: true
        },
        {
          id: 4,
            firstName: "Person",
            lastName: "44",
            active: true
        },
        {
            id: 5,
            firstName: "Person",
            lastName: "55",
            active: false
        },
        {
            id: 6,
            firstName: "Person",
            lastName: "11",
            active: true
        },
        {
            id: 7,
            firstName: "Person",
            lastName: "22",
            active: false
        },
        {
          id: 8,
            firstName: "Person",
            lastName: "33",
            active: true
        },
        {
          id: 9,
            firstName: "Person",
            lastName: "44",
            active: true
        },
        {
            id: 10,
            firstName: "Person",
            lastName: "55",
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
            lastName: "22",
            active: false
        },
        {
          id: 13,
            firstName: "Person",
            lastName: "33",
            active: true
        },
        {
          id: 14,
            firstName: "Person",
            lastName: "44",
            active: true
        },
        {
            id: 15,
            firstName: "Person",
            lastName: "55",
            active: false
        },
        {
            id: 16,
            firstName: "Person",
            lastName: "11",
            active: true
        },
        {
            id: 17,
            firstName: "Person",
            lastName: "22",
            active: false
        },
        {
          id: 18,
            firstName: "Person",
            lastName: "33",
            active: true
        },
        {
          id: 19,
            firstName: "Person",
            lastName: "44",
            active: true
        },
        {
            id: 20,
            firstName: "Person",
            lastName: "55",
            active: false
        },
        {
            id: 21,
            firstName: "Person",
            lastName: "11",
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
            lastName: "33",
            active: true
        },
        {
          id: 24,
            firstName: "Person",
            lastName: "44",
            active: true
        },
        {
            id: 25,
            firstName: "Person",
            lastName: "55",
            active: false
        }
    ]
});

export default Person;
