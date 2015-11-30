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
  FIXTURES: [{
    id:1,
    ativo: true,
    nome: 'Meta Genérica 1',
    sigla: 'MG',
    descricao: 'Descrição Meta Genérica 1',
    modelo: 1,
    nivelcapacidade: 1
  }]
});

export default MetaGenerica;
