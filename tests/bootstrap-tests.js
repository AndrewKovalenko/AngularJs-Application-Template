(function(require, karma){
  'use strict';


  karma.loaded = function(){};
  var filesToLoad = [];
  for (var file in karma.files) {
    if (karma.files.hasOwnProperty(file)) {
      if (/unit-test\.js$/.test(file)) {
        filesToLoad.push(file);
      }
    }
  }

  require.config({
    // Karma serves files from '/base'
    baseUrl: '/base',
    paths: {
      'angular': 'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular.min',
    },
    shim:{ 
      'angular':{
        exports: 'angular'
      }
    },

    // ask Require.js to load these files (all our filesToLoad)
    deps: filesToLoad,
    // start test run, once Require.js is done
    callback: karma.start
  });
})(window.require, window.__karma__);
