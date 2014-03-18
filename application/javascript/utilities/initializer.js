(function(define){
  'use strict';

  var initializer = function(angular){
    return function(parameters){
      var moduleToInit = angular.module(parameters.name, []);

      angular.forEach(parameters.dependencies, function(dependencyInstance){
        moduleToInit[parameters.type].call(moduleToInit, 
                                           dependencyInstance.name, 
                                           dependencyInstance.body);
      });

      return moduleToInit;
    };
  };

  define(['angular'], function(angular){
    return {
      initModule: initializer(angular)
    }; 
  });
})(window.define);
