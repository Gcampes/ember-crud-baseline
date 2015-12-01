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

for(var i = 3; i <= 25; i++){
  NivelCapacidade.FIXTURES.push({
    id: i,
    ativo: true,
    sigla: "NC" + i,
    nome: 'Nível de Capacidade ' + i,
    descricao: 'Descrição Nível de Capacidade ' + i,
  });
}

export default NivelCapacidade;
