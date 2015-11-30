import DS from 'ember-data';

let AreaProcesso = DS.Model.extend({
  ativo: DS.attr('boolean'),
  nome: DS.attr('string'),
  sigla: DS.attr('string'),
  descricao: DS.attr('string'),

  modelo: DS.belongsTo('modelo', {async: true}),
  nivelmaturidade: DS.belongsTo('nivel-maturidade', {async:true})
});

AreaProcesso.reopenClass({
  FIXTURES: [
    {
      id: 1,
      ativo: true,
      sigla: "A1",
      nome: "Área de Processo 1",
      descricao: "Área de Processo 1 Descrição",
      modelo: 1,
      nivelmaturidade: 4
    },
    {
      id: 2,
      ativo: true,
      sigla: "MP",
      nome: "Área de Processo 2",
      descricao: "Área de Processo 2 Descrição",
      modelo: 2,
      nivelmaturidade: 2
    },
  ]
});

export default AreaProcesso;
