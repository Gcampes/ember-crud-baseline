import DS from 'ember-data';

let Modelo = DS.Model.extend({
  ativo: DS.attr('boolean'),
  nome: DS.attr('string'),
  sigla: DS.attr('string'),
  descricao: DS.attr('string'),

  metasgenericas: DS.hasMany('meta-generica')
});

Modelo.reopenClass({
  FIXTURES: [
    {
      id: 1,
      ativo: true,
      sigla: "CM",
      nome: "CMMI",
      descricao: "CMMI Descrição"
    },
    {
      id: 2,
      ativo: true,
      sigla: "MP",
      nome: "MPS.BR",
      descricao: "MPS.BR Descrição"
    },
  ]
});

export default Modelo;
