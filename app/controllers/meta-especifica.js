import Ember from 'ember';

const{
  A
} = Ember;

export default Ember.Controller.extend({
  tableSortPropertiesMC: new A(['sigla:asc', 'nome:desc']),
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
    contentPath: 'areaprocesso.nome',
    columnTitle: 'Área de Processo'
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
      attribute: 'model.areaprocesso',
      label: 'Área de Processo',
      type: 'select',
      selectFunction: function(self){
        return self.store.filter('area-processo', {}, function(areaProcesso){
          return areaProcesso.get('ativo') || self.get('model.areaprocesso.id') === areaProcesso.get('id');
        });
      },
      selectValuePath: 'id',
      selectLabelPath: 'nome'
    }
  ]
});
