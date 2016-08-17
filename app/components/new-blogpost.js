import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    save(){
      var params= {
        title: this.get('title') ? this.get('title'): "",
        date: this.get('date') ? this.get('date'): "",
        image: this.get('image') ? this.get('image'): "",
        body: this.get('body')? this.get('body'): "",
        introduction: this.get('introduction')? this.get('introduction'): ""
      };
      this.sendAction('save', params);
    }
  }
});
