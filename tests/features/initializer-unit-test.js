(function(describe, it, expect, spyOn, define, jasmine){
  'use strict';

  var moduleInitialisationParameters = {
    type: 'controller',
    dependencies: ['one', 'two'],
    name: 'app.controllers'
  };

  var testBody = function(initializer, angular){
    describe('test of angular modules initializer', function(){
      it('should successfuly initialize new controllers module', function(){
        expect(typeof angular.module).toMatch('function');
 
        angular.module = jasmine.createSpy("module creation spy").andCallFake(function() {
          return {
            controller: jasmine.createSpy('module controller spy')
          };
        });

        var newModule = initializer.initModule(moduleInitialisationParameters);

        expect(angular.module).toHaveBeenCalledWith(moduleInitialisationParameters.name, []);
        expect(newModule.controller.callCount)
          .toBe(moduleInitialisationParameters.dependencies.length);
      });
    });
  };

  define([
    'application/javascript/utilities/initializer',
    'angular'
  ],
  testBody);
})(
window.describe, 
window.it, 
window.expect,
window.spyOn,
window.define,
window.jasmine
);
