import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('person', function() {
    this.route('add');
    this.route('edit', {path:'edit/:id'});
  });
  this.route('city', function(){
    this.route('add');
    this.route('edit', {path:'edit/:id'});
  });
  this.route('category', function(){
    this.route('add');
    this.route('edit', {path:'category/:id'});
  });
});

export default Router;
