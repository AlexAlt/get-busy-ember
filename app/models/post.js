import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  title: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  content: DS.attr()
});
