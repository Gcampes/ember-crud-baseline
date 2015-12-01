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
    columnTitle: 'Descrição'
  },
  {
    contentPath: 'modelo.nome',
    columnTitle: 'Modelo'
  },
  {
    contentPath: 'nivelmaturidade.nome',
    columnTitle: 'Nível Maturidade'
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
        length: {minimum: 2}
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
        return self.store.filter('modelo', {}, function(modelo){
          return modelo.get('ativo') || self.get('model.modelo.id') === modelo.id
        });
      },
      selectValuePath: 'id',
      selectLabelPath: 'nome',
      validations:{
        relationshipPresence: true
      },
    }, {
      attribute: 'model.nivelmaturidade',
      label: 'Nível de Maturidade',
      type: 'select',
      selectFunction: function(self){
        return self.store.filter('nivel-maturidade', {}, function(nivelMaturidade){
          return nivelMaturidade.get('ativo') || self.get('model.nivel-maturidade.id') === nivelMaturidade.id
        });
      },
      selectValuePath: 'id',
      selectLabelPath: 'nome',
      validations:{
        relationshipPresence: true
      },
    }
  ]
});
