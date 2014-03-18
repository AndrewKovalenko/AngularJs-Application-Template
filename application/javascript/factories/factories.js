(function(define){
  'use strict';
  define( 

         [
    'utilities/initializer',
    'factories/demo-factory'
  ], 
  function(initializer){
    return initializer.initModule({
      type: 'factory',
      dependencies: Array.prototype.slice.call(arguments, 1, arguments.length),
      name: 'app.factories'
    }); 
  });
})(window.define);
