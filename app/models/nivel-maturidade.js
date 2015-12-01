import DS from 'ember-data';

let NivelMaturidade = DS.Model.extend({
  ativo: DS.attr('boolean'),
  nome: DS.attr('string'),
  sigla: DS.attr('string'),
  descricao: DS.attr('string'),
});

NivelMaturidade.reopenClass({
  FIXTURES: [
    {
      id:1,
      ativo: true,
      nome: 'Executado',
      sigla: 'N1',
      descricao: 'Descrição Executado'
    },
    {
      id:2,
      ativo: true,
      nome: 'Gerenciado',
      sigla: 'N2',
      descricao: 'Descrição Gerenciado'
    },
    {
      id:3,
      ativo: true,
      nome: 'Definido',
      sigla: 'N3',
      descricao: 'Descrição Definido'
    },
    {
      id:4,
      ativo: true,
      nome: 'Parametrizado',
      sigla: 'N4',
      descricao: 'Quantitativamente Gerenciado'
    },
    {
      id:5,
      ativo: true,
      nome: 'Otimizado',
      sigla: 'N5',
      descricao: 'Descrição Otimizado'
    },
  ]
});

export default NivelMaturidade;
