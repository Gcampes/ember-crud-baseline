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
    contentPath: 'template',
    columnTitle: 'Template'
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
      attribute: 'model.template',
      label: 'Sigla',
      type: 'text',
      validations:{
        presence: true
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
    }
  ]
});
