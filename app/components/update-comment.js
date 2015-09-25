import Ember from 'ember';

export default Ember.Component.extend({
updateCommentForm: false,

actions: {
  updateCommentForm() {
    this.set('updateCommentForm', true);
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
