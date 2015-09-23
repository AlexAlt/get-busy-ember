import Ember from 'ember';

export default Ember.Component.extend({

    actions: {
      save() {
        var params = {
          date: this.get('date'),
          title: this.get('title'),
          author: this.get('author'),
          image: this.get('image'),
          content: this.get('content'),
        };
          this.sendAction('save', params);
      }
    }
});
