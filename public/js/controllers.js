'use strict';



var graphCtrl = myApp.controller('GraphCtrl', ['$scope', '$routeParams', '$http', '$dialog', "Graph", function($scope, $routeParams, $http, $dialog, Graph){
  //$scope.graph = {};
  //$scope.graphs = [[ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 17 }, { x: 3, y: 42 } ],
  //[{x: 0, y: 15}, {x: 1, y: 20}]];
  $scope.testArray = Graph;
  var testJSON = [];
  for(var i = 0; i < $scope.testArray.length; i++){
    if($scope.testArray[i][1] !== undefined && $scope.testArray[i][0] !== undefined){
      console.log($scope.testArray[i]);
      testJSON.push({x: $scope.testArray[i][1], y: $scope.testArray[i][0]});
    }
  }
  $scope.graphs = [testJSON];
  $scope.type = "line";
}]);
