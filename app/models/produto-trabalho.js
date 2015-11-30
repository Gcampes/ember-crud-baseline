import DS from 'ember-data';

let ProdutoTrabalho = DS.Model.extend({
  ativo: DS.attr('boolean'),
  nome: DS.attr('string'),
  template: DS.attr('string'),
  descricao: DS.attr('string'),
});

ProdutoTrabalho.reopenClass({
  FIXTURES: [
    {
      id: 1,
      ativo: true,
      template: "template1",
      nome: "Produto de Trabalho 1",
      descricao: "Descrição Produto de Trabalho 1",
    },
    {
      id: 2,
      ativo: true,
      template: "template2",
      nome: "Produto de Trabalho 2",
      descricao: "Descrição Produto de Trabalho 2",
    },
  ]
});

export default ProdutoTrabalho;
