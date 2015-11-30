import DS from 'ember-data';

let PraticaEspecifica = DS.Model.extend({
  ativo: DS.attr('boolean'),
  nome: DS.attr('string'),
  sigla: DS.attr('string'),
  descricao: DS.attr('string'),

  metaespecifica: DS.belongsTo('meta-especifica', {async: true}),
  produtostrabalho: DS.hasMany('produto-trabalho', {async: true})
});

PraticaEspecifica.reopenClass({
  FIXTURES: [
    {
      id: 1,
      ativo: true,
      sigla: "P1",
      nome: "Prática Específica 1",
      descricao: "Prática Específica 1 Descrição",
      metaespecifica: 1,
      produtostrabalho: [1, 2]
    },
    {
      id: 2,
      ativo: true,
      sigla: "P2",
      nome: "Prática Específica 2",
      descricao: "Prática Específica 2 Descrição",
      metaespecifica: 2,
      produtostrabalho: [2]
    },
    {
      id: 3,
      ativo: true,
      sigla: "P3",
      nome: "Prática Específica 3",
      descricao: "Prática Específica 3 Descrição",
      metaespecifica: 1,
      produtostrabalho: [1]
    },
  ]
});

export default PraticaEspecifica;
