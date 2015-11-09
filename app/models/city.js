import DS from 'ember-data';

let City = DS.Model.extend({
  name: DS.attr('string'),
  country: DS.attr('string'),
  state: DS.attr('string')
});

City.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: "City 1",
            country: "Country 1",
            state: "State 1"
        },
        {
            id: 2,
            name: "City 2",
            country: "Country 2",
            state: "State 2"
        },
        {
            id: 3,
            name: "City 3",
            country: "Country 3",
            state: "State 3"
        },
        {
            id: 4,
            name: "City 4",
            country: "Country 4",
            state: "State 4"
        },
        {
            id: 5,
            name: "City 5",
            country: "Country 5",
            state: "State 5"
        }
    ]
});

export default City;
