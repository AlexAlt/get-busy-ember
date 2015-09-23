import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(post, params) {
      this.sendAction('save', post, params)
    }
  }
});
