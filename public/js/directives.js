'use strict';

/* Directives */

var directives = angular.module('myApp.directives', []);

// simple fade in animation for a touch of class...
directives.directive('fadeIn', function () {
    return {
        compile:function (elm) {
            $(elm).css('opacity', 0.0);
            return function (scope, elm, attrs) {
                $(elm).animate({ opacity:1.0 }, 1500);
            };
        }
    };
});

// this is the angular way to stop even propagation 
directives.directive('stopEvent', function () {
    return {
        restrict:'A',
        link:function (scope, element, attr) {
            element.bind(attr.stopEvent, function (e) {
                e.stopPropagation();
            });
        }
    }
});

directives.directive("rickshaw", function(){
  return {
    restrict: 'A',
    scope: {
      data: '=graph',
      type: '='
    },
    link: function(scope, element, attrs){
      var graph = new Rickshaw.Graph({
        element: element.find('.graph')[0],
        width: 580,
        height: 250,
        series: [ {
          color: 'steelblue',
          data: scope.data
        }]

      });
      var x_axis = new Rickshaw.Graph.Axis.Time({graph: graph});
      var y_axis = new Rickshaw.Graph.Axis.Y({
        graph: graph,
        orientation: 'left',
        tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
        element: element.find('.y_axis')[0]
      });
      graph.setRenderer("line");
      graph.render();
    }
  }
});