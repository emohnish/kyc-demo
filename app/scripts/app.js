var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "../app/pages/main.html"
    })
    .when("/red", {
        templateUrl : "../app/pages/red.html"
    })
    .when("/green", {
        templateUrl : "../app/pages/green.html"
    })
    .when("/blue", {
        templateUrl : "../app/pages/blue.html"
    }).when("/kycwriteup", {
        templateUrl : "../app/pages/kycwriteup.html"
    }).when("/rmTagging", {
        templateUrl : "../app/pages/rmTagging.html"
    });
});

app.controller("myCtrl", function($scope) {

    //alert('111');
    $scope.selectEntity = "Entity A";
    $scope.selectRelManager = "Manager A";
    $scope.selectRMSalesCode = "RM Sales Code A";
    $scope.selectLMName = "LM Name A";
    $scope.selectAccountType = "Account Type A";

    var entityDrpDwnValues = '{ "values": [ "Entity A", "Entity B", "Entity C", "Entity D", "Entity E"]}';
    $scope.entityValues = JSON.parse(entityDrpDwnValues);

    var relManagerNameDrpDwnValues = '{ "values": [ "Manager A", "Manager B", "Manager C", "Manager D", "Manager E"]}';
    $scope.relManagerNameValues = JSON.parse(relManagerNameDrpDwnValues);

    var rmSalesCodeDrpDwnValues = '{ "values": [ "RM Sales Code A", "RM Sales Code B", "RM Sales Code C", "RM Sales Code D", "RM Sales Code E"]}';
    $scope.rmSalesCodeValues = JSON.parse(rmSalesCodeDrpDwnValues);

    var lmNameDrpDwnValues = '{ "values": [ "LM Name A", "LM Name B", "LM Name C", "LM Name D", "LM Name E"]}';
    $scope.lmNameValues = JSON.parse(lmNameDrpDwnValues);

    var accountTypeDwnValues = '{ "values": [ "Account Type A", "Account Type B", "Account Type C", "Account Type D", "Account Type E"]}';
    $scope.accountTypeValues = JSON.parse(accountTypeDwnValues);


    $scope.rmTaggingSave = function () {
        alert('rmTaggingSave');
      }


    $scope.addItem = function () {
      $scope.errortext = "";
      if (!$scope.addMe) {return;}
      if ($scope.products.indexOf($scope.addMe) == -1) {
        $scope.products.push($scope.addMe);
      } else {
        $scope.errortext = "The item is already in your shopping list.";
      }
    }
    $scope.removeItem = function (x) {
      $scope.errortext = "";
      $scope.products.splice(x, 1);
    } 
  });


