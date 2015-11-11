import DS from 'ember-data';

let Person = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string')
});

Person.reopenClass({
    FIXTURES: [
        {
            id: 1,
            firstName: "Person",
            lastName: "11"
        },
        {
            id: 2,
            firstName: "Person",
            lastName: "22"
        },
        {
          id: 3,
            firstName: "Person",
            lastName: "33"
        },
        {
          id: 4,
            firstName: "Person",
            lastName: "44"
        },
        {
            id: 5,
            firstName: "Person",
            lastName: "55"
        }
    ]
});

export default Person;
