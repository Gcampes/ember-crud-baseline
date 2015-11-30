import DS from 'ember-data';

let MetaEspecifica = DS.Model.extend({
  ativo: DS.attr('boolean'),
  nome: DS.attr('string'),
  sigla: DS.attr('string'),
  descricao: DS.attr('string'),

  areaprocesso: DS.belongsTo('area-processo', {async: true})
});

MetaEspecifica.reopenClass({
  FIXTURES: [
    {
      id: 1,
      ativo: true,
      sigla: "M1",
      nome: "Meta Específica 1",
      descricao: "Descrição Meta Específica 1",
      areaprocesso: 1
    },
    {
      id: 2,
      ativo: true,
      sigla: "M2",
      nome: "Meta Específica 2",
      descricao: "Descrição Meta Específica 2",
      areaprocesso: 2
    },
  ]
});

export default MetaEspecifica;
