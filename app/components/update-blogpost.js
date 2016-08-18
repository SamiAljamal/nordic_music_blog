import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogpostForm: false,
  actions: {
    updateBlogpostForm() {
      this.set('updateBlogpostForm', true);
    },
    update(blogpost) {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        image: this.get('image'),
        body: this.get('body'),
        introduction: this.get('introduction'),
      };
      this.set('updateBlogpostForm', false);
      this.sendAction('update', blogpost, params);
    }
  }
});
