import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  definitions: [
    {
      value: 'model.firstName',
      label: 'Primeiro Nome',
      type: 'text'
    },

    {
      value: 'model.lastName',
      label: 'Sobrenome',
      type: 'text'
    }
  ],

  validations: {
   'model.firstName': {
     length: {minimum: 5}
   },

   'model.lastName':{
     length: {minimum: 2}
   }
  },

  actions:{
    addRecord(){
      const self = this;
      let flashMessages = Ember.get(this, 'flashMessages');

      this.validate().then(() => {
        this.get('model').save().then(() => {
          flashMessages.success('Successfully created record');
        });
      }, function(){
        let errors = self.get('errors.model');
        for(let item in errors){
          if(errors.hasOwnProperty(item) && item !== '__nextSuper'){
            let definitions = self.get('definitions')
            for(let def in definitions){
              if(definitions[def] && 'model.'+item === definitions[def].value && errors.get(item).length)
                flashMessages.danger(definitions[def].label + ' ' + errors.get(item));
            }
          }
        }
      })
    },
  }
});
