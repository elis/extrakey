(function(){
  var ek = window.extraKey = Ember.Application.create({});
  
  // Router
  ek.Router.map(function() {
    this.resource('index', {path: '/'});
  });

  
  $(function(){
      $.StartScreen();
  });
}());

