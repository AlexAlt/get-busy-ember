import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,

  actions: {
    openPostForm() {
      this.set('updatePostForm', true);
    },

    closePostForm() {
      this.set('updatePostForm', false);
    },

    delete(post){
      if (confirm('Are you sure you want to delete this post?')){
        this.sendAction('destroyPost', post);
      }
    },

    update(post){
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        author: this.get('author'),
        image: this.get('image'),
        content: this.get('content')
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
