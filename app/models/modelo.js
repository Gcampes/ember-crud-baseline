import DS from 'ember-data';

let Modelo = DS.Model.extend({
  ativo: DS.attr('boolean'),
  nome: DS.attr('string'),
  sigla: DS.attr('string'),
  descricao: DS.attr('string'),

  // metasgenericas: DS.hasMany('meta-generica', {async: true}),
  // areasprocesso: DS.hasMany('area-processo', {async: true})
});

Modelo.reopenClass({
  FIXTURES: [
    {
      id: 1,
      ativo: true,
      sigla: "CM",
      nome: "CMMI",
      descricao: "CMMI Descrição",
      // metasgenericas: [1],
      // areasprocesso: [1]
    },
    {
      id: 2,
      ativo: true,
      sigla: "MP",
      nome: "MPS.BR",
      descricao: "MPS.BR Descrição",
      // areasprocesso: [2]
    },
  ]
});


// for(var i = 3; i <= 25; i++){
//   Modelo.FIXTURES.push({
//     id: i,
//     ativo: true,
//     sigla: "M" + i,
//     nome: "Modelo " + i,
//     descricao: "Descrição Modelo " + i,
//   });
// }

export default Modelo;
