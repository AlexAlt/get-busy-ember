import Ember from 'ember';

export default Ember.Component.extend({
  addCommentForm: false,

  actions: {
    openAddCommentForm() {
    this.set('addCommentForm', true);
  },

  closeAddCommentForm() {
  this.set('addCommentForm', false);
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
