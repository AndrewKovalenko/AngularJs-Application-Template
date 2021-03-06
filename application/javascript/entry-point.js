(function (require, undefined) {
  'use strict';

  require.config({
    baseUrl:'javascript',

    paths:{
      'angular': 'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular.min',
      'angular-ui-router': 'http://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.8/angular-ui-router.min'
    },

    shim:{
      'angular':{
        exports: 'angular'
      },
      'angular-ui-router': {
        deps:['angular'],
        exports: 'angular-ui-router'
      }
    }
  });

  var applicationStartModule = function(angular, routingConfiguration) {
    angular.element(document).ready(function() {
      var demoApplication = angular.module("demoApplication", 
        ["ui.router",
        "app.controllers",
        "app.directives",
        "app.factories",
        "app.services",
        "app.filters"
        ]);
      demoApplication.config(routingConfiguration);
      angular.bootstrap(document, ['demoApplication']);

    });
  };

  require(['angular',
    'config/routing-configuration',
    'controllers-module',
    'directives-module',
    'factories-module',
    'services-module',
    'filters-module',
    'angular-ui-router'],
    applicationStartModule );
})(window.require);
