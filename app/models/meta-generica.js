import DS from 'ember-data';

let MetaGenerica = DS.Model.extend({
  ativo: DS.attr('boolean'),
  nome: DS.attr('string'),
  sigla: DS.attr('string'),
  descricao: DS.attr('string'),

  modelo: DS.belongsTo('modelo', {async: true}),
  nivelcapacidade: DS.belongsTo('nivel-capacidade', {async: true, defaultValue: 1}),

  modeloid: Ember.computed.alias('modelo.id')
});

MetaGenerica.reopenClass({
  FIXTURES: []
});

for(var i = 1; i <= 500; i++){
  MetaGenerica.FIXTURES.push({
    id: i,
    ativo: true,
    nome: 'Meta Genérica ' + i,
    sigla: "MG" + i,
    descricao: 'Descrição Meta Genérica ' + i,
    modelo: Math.floor(Math.random() * (25)) + 1,
    nivelcapacidade: 1
  });
}

export default MetaGenerica;
