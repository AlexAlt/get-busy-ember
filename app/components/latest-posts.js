import Ember from 'ember';

export default Ember.Component.extend({
    model: function() {
    var allPosts = this.store.all('post');
    var count = allPosts.get('length');
    return allPosts.objectAt(count-3) || allPosts.objectAt(count-2) || allPosts.objectAt(count-1);
  }
});
