import Ember from 'ember';
import MagicRoute from 'ember-imdt-magic-crud/mixins/magic-route';

export default Ember.Route.extend(MagicRoute, {
  beforeModel(){
    this.store.findAll('area-processo');
    this.store.findAll('meta-especifica');
    this.store.findAll('meta-generica');
    this.store.findAll('modelo');
    this.store.findAll('nivel-capacidade');
    this.store.findAll('nivel-maturidade');
    this.store.findAll('pratica-especifica');
    this.store.findAll('produto-trabalho');
  }
});
