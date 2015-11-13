import DS from 'ember-data';

let Category = DS.Model.extend({
  name: DS.attr('string'),
  active: DS.attr('boolean'),
  city: DS.hasMany('city')
});

Category.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: "Category 1",
            active: true
        },
    ]
});


export default Category;
