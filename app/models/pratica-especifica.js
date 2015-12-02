import DS from 'ember-data';
import RollbackRelationship from '../mixins/rollback-relationship';

let PraticaEspecifica = DS.Model.extend(RollbackRelationship, {
  ativo: DS.attr('boolean'),
  nome: DS.attr('string'),
  sigla: DS.attr('string'),
  descricao: DS.attr('string'),

  metaespecifica: DS.belongsTo('meta-especifica', {async: true}),
  produtostrabalho: DS.hasMany('produto-trabalho', {async: true})
});

PraticaEspecifica.reopenClass({
  FIXTURES: []
});

// for(var i = 1; i <= 500; i++){
//   var array = []
//   for (var j = 1; j <= 10; j++) {
//     if(Math.random() < 0.50){
//       array.push(j);
//     }
//   }
//   // console.log(array);
//   PraticaEspecifica.FIXTURES.push({
//     id: i,
//     ativo: true,
//     sigla: "P" + i,
//     nome: "Prática Específica " + i,
//     descricao: "Prática Específica " + i + " Descrição",
//     metaespecifica: 1,
//     produtostrabalho: array
//   });
// }

export default PraticaEspecifica;
