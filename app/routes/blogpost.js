import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('blogpost', params.blogpost_id);
  },
  actions: {
    update(blogpost, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          blogpost.set(key,params[key]);
        }
      });
      blogpost.save();
      this.transitionTo('index');
    },
    saveComment(params){
      var newComment = this.store.createRecord('comment', params);
      var blogpost = params.blogpost;
      blogpost.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return blogpost.save();
      });
      this.transitionTo('blogpost',params.blogpost);
    }
  }
});
