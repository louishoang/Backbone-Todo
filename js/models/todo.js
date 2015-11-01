var app = app || {};

app.Todo = Backbone.Model.extend({
  //defaults attributes

  defaults: {
    title: '',
    completed: false
  },

  toggle: function(){
    this.save({
      completed: !this.get('completed')
    });
  }
});