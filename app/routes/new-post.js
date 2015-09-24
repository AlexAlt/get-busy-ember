import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params) {
      var newPost = this.store.createRecord('post', params);
      debugger;
      newPost.save();
      this.transitionTo('index');
    }
  }
});
