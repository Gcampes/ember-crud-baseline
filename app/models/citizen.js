import DS from 'ember-data';

let Citizen = DS.Model.extend({
  idnumber: DS.attr('string'),
  active: DS.attr('boolean'),
  person: DS.belongsTo('person', {async: true}),
  city: DS.belongsTo('city', {async: true})
});

Citizen.reopenClass({
    FIXTURES: [
        {
            id: 1,
            active: true,
            idnumber: "1111",
            person: 1,
            city: 1
        },
        {
            id: 2,
            active: true,
            idnumber: "2222",
            person: 2,
            city: 2
        },
        {
            id: 3,
            active: false,
            idnumber: "3333",
            person: 3,
            city: 3
        },
    ]
});

export default Citizen;
