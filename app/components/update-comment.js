import Ember from 'ember';

export default Ember.Component.extend({
updateCommentForm: false,

actions: {
  openCommentForm() {
    this.set('updateCommentForm', true);
  },

  closeCommentForm() {
    this.set('updateCommentForm', false);
  },

  deleteComment(post){
    if (confirm('Are you sure you want to delete this comment?')){
      this.sendAction('destroyComment', post);
    }
  },

  updateComment(post){
    var params = {
      username: this.get('username'),
      content: this.get('content')
    };
    this.set('updateCommentForm', false);
    this.sendAction('updateComment', post, params);
  }
}
});
