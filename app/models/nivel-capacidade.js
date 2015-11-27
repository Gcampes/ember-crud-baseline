import DS from 'ember-data';

let NivelCapacidade = DS.Model.extend({
  ativo: DS.attr('boolean'),
  nome: DS.attr('string'),
  sigla: DS.attr('string'),
  descricao: DS.attr('string')
});

NivelCapacidade.reopenClass({
  FIXTURES: [{
    id:1,
    ativo: true,
    nome: 'Nível de Capacidade 1',
    sigla: 'NC',
    descricao: 'Descrição Nível de Capacidade 1',
  }]
});

export default NivelCapacidade;
