import Ember from 'ember';

const{
  A
} = Ember;

export default Ember.Controller.extend({
  tableOptionsMC: new A([{
    contentPath: 'id',
    columnTitle: 'Id'
  },
  {
    contentPath: 'sigla',
    columnTitle: 'Sigla'
  },
  {
    contentPath: 'nome',
    columnTitle: 'Nome'
  },
  {
    contentPath: 'descricao',
    columnTitle: 'Desrição'
  },
  {
    contentPath: 'modelo.nome',
    columnTitle: 'Modelo'
  },
  {
    contentPath: 'nivelcapacidade.nome',
    columnTitle: 'Nível de Capacidade'
  },
  {
    contentPath: 'template',
    columnTitle: 'Ações',
    template: 'custom/table-actions',
    isSortable: false
  }]),

  formDefinitionsMC: [{
      attribute: 'model.ativo',
      label: 'Ativo',
      type: 'switch'
    }, {
      attribute: 'model.sigla',
      label: 'Sigla',
      type: 'text',
      validations:{
        presence: true,
        length: 2
      }
    }, {
      attribute: 'model.nome',
      label: 'Nome',
      type: 'text',
      validations:{
        presence: true,
        length: {minimum: 3}
      }
    }, {
      attribute: 'model.descricao',
      label: 'Descrição',
      type: 'text',
      validations:{
        presence: true
      }
    }, {
      attribute: 'model.modelo',
      label: 'Modelo',
      type: 'select',
      selectFunction: function(self){
        return self.store.filter('modelo', {}, function(item){
          return item.get('ativo') || self.get('model.modelo.id') === item.id;
        });
      },
      selectValuePath: 'id',
      selectLabelPath: 'nome',
      validations:{
        relationshipPresence: true
      }
    }, {
      attribute: 'model.nivelcapacidade',
      label: 'Nível de Capacidade',
      type: 'select',
      selectFunction: function(self){
        return self.store.filter('nivel-capacidade', {}, function(item){
          return item.get('ativo') || self.get('model.nivel-capacidade.id') === item.id;
        });
      },
      selectValuePath: 'id',
      selectLabelPath: 'nome',
      validations:{
        relationshipPresence: true
      }
    },
  ]
});
