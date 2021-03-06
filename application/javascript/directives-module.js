﻿// NOTE this module is created just in case we have lot of
// controllers to make code more readable
(function (define) {
    'use strict';
    define(
           [
      'utilities/initializer'
           ],

    function (initializer) {
        return initializer.initModule({
            type: 'directive',
            dependencies: Array.prototype.slice.call(arguments, 1, arguments.length),
            name: 'app.directives'
        });
    });
})(window.define);
