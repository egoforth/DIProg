import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('products');
  this.route('items', function() {
  	this.route('item',{path:'/:id'});
  });
  this.route('about');
});

export default Router;
