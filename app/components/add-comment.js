import Ember from 'ember';

export default Ember.Component.extend({
  addCommentForm: false,

  actions: {
    addCommentForm() {
    this.set('addCommentForm', true);
  },

    saveComment() {
      var params = {
        username: this.get('username'),
        content: this.get('content'),
        post: this.get('post')
      };
        this.sendAction('saveComment', params);
    }
  }
});
