import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      comments: this.store.findAll('comment'),
      posts: this.store.findAll('post')
    });
   }
});
