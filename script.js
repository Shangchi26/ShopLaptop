document.getElementById("next").onclick = function () {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").appendChild(lists[0]);
  };
  document.getElementById("prev").onclick = function () {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
  };
  
  var app = angular.module("myApp", []);
  app.controller("myCtrl", function ($scope) {
    $scope.count = [0, 0, 0, 0, 0, 0, 0, 0];
  
    $scope.myFunction = function (index) {
      $scope.count[index] = $scope.count[index] += 1;
    };
  });