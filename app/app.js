import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

import AreaProcesso from './models/area-processo';
import MetaEspecifica from './models/meta-especifica';
import MetaGenerica from './models/meta-generica';
import Modelo from './models/modelo';
import NivelCapacidade from './models/nivel-capacidade';
import PraticaEspecifica from './models/pratica-especifica';
import ProdutoTrabalho from './models/produto-trabalho';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

for(var i = 3; i <= 25; i++){
  Modelo.FIXTURES.push({
    id: i,
    ativo: true,
    sigla: "M" + i,
    nome: "Modelo " + i,
    descricao: "Descrição Modelo " + i,
  });
}

for(var i = 3; i <= 25; i++){
  NivelCapacidade.FIXTURES.push({
    id: i,
    ativo: true,
    sigla: "NC" + i,
    nome: 'Nível de Capacidade ' + i,
    descricao: 'Descrição Nível de Capacidade ' + i,
  });
}

for(var i = 1; i <= 500; i++){
  ProdutoTrabalho.FIXTURES.push({
    id: i,
    ativo: true,
    template: "template"+i,
    nome: "Produto de Trabalho "+i,
    descricao: "Descrição Produto de Trabalho "+i,
  });
}

for(var i = 1; i <= 500; i++){
  AreaProcesso.FIXTURES.push({
    id: i,
    ativo: true,
    sigla: "A" + i,
    nome: "Área de Processo " + i,
    descricao: "Área de Processo " + i + " Descrição",
    modelo: Math.floor(Math.random() * 25) + 1,
    nivelmaturidade: Math.floor(Math.random() * 5) + 1
  });
}

for(var i = 1; i <= 500; i++){
  MetaEspecifica.FIXTURES.push({
    id: i,
    ativo: true,
    sigla: "ME" + i,
    nome: "Meta Específica " + i,
    descricao: "Meta Específica " + i + " Descrição",
    areaprocesso: Math.floor(Math.random() * 500) + 1
  });
}

for(var i = 1; i <= 500; i++){
  MetaGenerica.FIXTURES.push({
    id: i,
    ativo: true,
    nome: 'Meta Genérica ' + i,
    sigla: "MG" + i,
    descricao: 'Descrição Meta Genérica ' + i,
    modelo: Math.floor(Math.random() * 25) + 1,
    nivelcapacidade: 1
  });
}

for(var i = 1; i <= 500; i++){
  var array = [];
  for (var j = 1; j <= 500; j++) {
    if(Math.random() < 0.01){
      array.push(j);
    }
  }
  // console.log(array);
  PraticaEspecifica.FIXTURES.push({
    id: i,
    ativo: true,
    sigla: "P" + i,
    nome: "Prática Específica " + i,
    descricao: "Prática Específica " + i + " Descrição",
    metaespecifica: Math.floor(Math.random() * 500) + 1,
    produtostrabalho: array
  });
}

export default App;
