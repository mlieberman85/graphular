'use strict';


angular.module('myApp.services', ['ngResource'])
  .factory('socket', function($rootScope){
    var socket = io.connect();
    return {
      on: function(eventName, callback) {
        socket.on(eventName, function() {
          var args = arguments;
          $rootScope.$apply(function() {
            callback.apply(socket, args);
          });
        });
      },
      emit: function(eventName, data, callback) {
        socket.emit(eventName, data, function() {
          var args = arguments;
          $rootScope.$apply(function() {
            if(callback) {
              callback.apply(socket, args);
            }
          });
        });
      }
    }
})
.factory('Graph', function($resource){
    return $resource('http://http://monitoring.fuseamplify.com:800/' +
      'render?' +
      'from=-6h&' +
      'target=carbon.agents.*.memUsage&' +
      'title=My%20First%20Graph&' +
      'format=json', {}, {
      query: {method:'GET', isArray:true}
    });
  });