import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
      var params = {
        name: this.get('name'),
        content: this.get('content'),
        blogpost: this.get('blogpost')
      };
      console.log(params);
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
