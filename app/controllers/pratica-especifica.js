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
    contentPath: 'metaespecifica.nome',
    columnTitle: 'Meta Específica'
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
      attribute: 'model.metaespecifica',
      label: 'Meta Específica',
      type: 'select',
      selectFunction: function(self){
        return self.store.filter('meta-especifica', {}, function(meta){
          return meta.get('ativo') || self.get('model.metaespecifica.id') === meta.get('id');
        })
      },
      selectValuePath: 'id',
      selectLabelPath: 'nome',
      validations:{
        relationshipPresence: true
      }
    }, {
      attribute: 'model.produtostrabalho',
      label: 'Produtos de Trabalho',
      type: 'multiselect',
      selectFunction: function(self){
        return self.store.filter('produto-trabalho', {}, function(produtotrabalho){
          return produtotrabalho.get('ativo');
        })
      },
      selectValuePath: 'id',
      selectLabelPath: 'nome',
      validations:{
        relationshipPresence: true
      }
    },
  ]
});
