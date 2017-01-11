import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('story', {path: '/story/:story_id'});
  this.route('contact');
  this.route('about');
  this.route('admin');
  this.route('update');
  this.route('new-content');
  this.route('story-detail');
});

export default Router;
