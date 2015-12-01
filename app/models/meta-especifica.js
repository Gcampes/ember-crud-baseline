import DS from 'ember-data';

let MetaEspecifica = DS.Model.extend({
  ativo: DS.attr('boolean'),
  nome: DS.attr('string'),
  sigla: DS.attr('string'),
  descricao: DS.attr('string'),

  areaprocesso: DS.belongsTo('area-processo', {async: true})
});

MetaEspecifica.reopenClass({
  FIXTURES: []
});

for(var i = 1; i <= 500; i++){
  MetaEspecifica.FIXTURES.push({
    id: i,
    ativo: true,
    sigla: "ME" + i,
    nome: "Meta Específica " + i,
    descricao: "Meta Específica " + i + " Descrição",
    areaprocesso: Math.floor(Math.random() * (500)) + 1
  });
}

export default MetaEspecifica;
