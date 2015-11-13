import DS from 'ember-data';

let City = DS.Model.extend({
  name: DS.attr('string'),
  country: DS.attr('string'),
  state: DS.attr('string'),
  category: DS.belongsTo('category', {async: true})
});

City.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: "City 1",
            country: "Country 1",
            state: "State 1",
            category: 1
        },
        {
            id: 2,
            name: "City 2",
            country: "Country 2",
            state: "State 2",
            category: 1
        },
        {
            id: 3,
            name: "City 3",
            country: "Country 3",
            state: "State 3",
            category: 1
        },
        {
            id: 4,
            name: "City 4",
            country: "Country 4",
            state: "State 4",
            category: 1
        },
        {
            id: 5,
            name: "City 5",
            country: "Country 5",
            state: "State 5",
            category: 1
        },
    ]
});

export default City;
