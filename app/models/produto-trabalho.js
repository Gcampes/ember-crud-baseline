import DS from 'ember-data';

let ProdutoTrabalho = DS.Model.extend({
  ativo: DS.attr('boolean'),
  nome: DS.attr('string'),
  template: DS.attr('string'),
  descricao: DS.attr('string'),
});

ProdutoTrabalho.reopenClass({
  FIXTURES: []
});

// for(var i = 1; i <= 500; i++){
//   ProdutoTrabalho.FIXTURES.push({
//     id: i,
//     ativo: true,
//     template: "template"+i,
//     nome: "Produto de Trabalho "+i,
//     descricao: "Descrição Produto de Trabalho "+i,
//   });
// }

export default ProdutoTrabalho;
