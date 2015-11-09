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
            lastName: "1"
        },
        {
            id: 2,
            firstName: "Person",
            lastName: "2"
        },
        {
          id: 3,
            firstName: "Person",
            lastName: "3"
        },
        {
          id: 4,
            firstName: "Person",
            lastName: "4"
        },
        {
            id: 5,
            firstName: "Person",
            lastName: "5"
        }
    ]
});

export default Person;
