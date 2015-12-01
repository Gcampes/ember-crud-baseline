import DS from 'ember-data';

let AreaProcesso = DS.Model.extend({
  ativo: DS.attr('boolean'),
  nome: DS.attr('string'),
  sigla: DS.attr('string'),
  descricao: DS.attr('string'),

  modelo: DS.belongsTo('modelo', {async: true}),
  nivelmaturidade: DS.belongsTo('nivel-maturidade', {async:true})
});

AreaProcesso.reopenClass({
  FIXTURES: []
});

for(var i = 1; i <= 500; i++){
  AreaProcesso.FIXTURES.push({
    id: i,
    ativo: true,
    sigla: "A" + i,
    nome: "Área de Processo " + i,
    descricao: "Área de Processo " + i + " Descrição",
    modelo: Math.floor(Math.random() * (25)) + 1,
    nivelmaturidade: Math.floor(Math.random() * (5)) + 1
  });
}

export default AreaProcesso;
