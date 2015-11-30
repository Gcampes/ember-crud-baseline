import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('modelo', function() {
    this.route('add');
    this.route('edit', {path:'edit/:id'});
  });
  this.route('meta-generica', function() {
    this.route('add');
    this.route('edit', {path:'edit/:id'});
  });
  this.route('nivel-capacidade', function() {
    this.route('add');
    this.route('edit', {path:'edit/:id'});
  });
  this.route('nivel-maturidade', function() {
    this.route('add');
    this.route('edit', {path:'edit/:id'});
  });
  this.route('area-processo', function() {
    this.route('add');
    this.route('edit', {path:'edit/:id'});
  });
  this.route('meta-especifica', function() {
    this.route('add');
    this.route('edit', {path:'edit/:id'});
  });
  this.route('pratica-especifica', function() {
    this.route('add');
    this.route('edit', {path:'edit/:id'});
  });
  this.route('produto-trabalho', function() {
    this.route('add');
    this.route('edit', {path:'edit/:id'});
  });
});

export default Router;
