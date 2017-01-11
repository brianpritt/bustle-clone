import Ember from 'ember';

export default Ember.Route.extend({
  updateStoryForm: false,
  actions: {
    updateStoryForm() {
      this.set('updateStoryForm', true);
    },
    update(story) {

      var params = {
        author: this.get('author'),
        content: this.get('content'),
        headline: this.get('headline'),
        picture: this.get('picture'),

      };
      this.set('updateStoryForm', false);
      this.sendAction('update', story, params);
    }
  }
});
