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
    }).when("/rmTagging", {
        templateUrl : "../app/pages/rmTagging.html"
    }).when("/kycwriteup", {
        templateUrl : "../app/pages/kycwriteup.html"
    }).when("/riskAssessment", {
        templateUrl : "../app/pages/riskAssessment.html"
    }).when("/documentUpload", {
        templateUrl : "../app/pages/documentUpload.html"
    }).when("/submit", {
        templateUrl : "../app/pages/submitPage.html"
    });
});

app.controller("myCtrl", function($scope, $http, $location) {

/*
    $http.get("app/json/entity.json")
    .then(function(response) {
        
        var myObj = JSON.parse(response);
        $scope.entityValues = myObj.values;
    }), function myError(response) {
        $scope.myWelcome = response.statusText;
      });
*/
      $http({
        method : "GET",
          url : "app/json/entity.json"
      }).then(function mySuccess(response) {
        $scope.entityValues = response.data.values;
      }, function myError(response) {
        // error handling
      });

      $scope.countryList = [];
      $http({
        method : "GET",
          url : "app/json/countries.json"
      }).then(function mySuccess(response) {

        response.data.forEach(function(obj){
            $scope.countryList.push(obj.name);
        });
      }, function myError(response) {
        // error handling
      });

    //$scope.callJson();

    //alert('111');

    $scope.rmtagging = {};
    

    $scope.rmtagging.entity = "Entity A";
    $scope.rmtagging.relManager = "Manager A";
    $scope.rmtagging.rmSalesCode = "RM Sales Code A";
    $scope.rmtagging.lmName = "LM Name A";
    $scope.rmtagging.accountType = "Account Type A";

    $scope.show = false;
    $scope.showKycWriteupJson = false;

    //var entityDrpDwnValues = '{ "values": [ "Entity A", "Entity B", "Entity C", "Entity D", "Entity E"]}';
    //$scope.entityValues = JSON.parse(entityDrpDwnValues);

    var relManagerNameDrpDwnValues = '{ "values": [ "Manager A", "Manager B", "Manager C", "Manager D", "Manager E"]}';
    $scope.relManagerNameValues = JSON.parse(relManagerNameDrpDwnValues);

    var rmSalesCodeDrpDwnValues = '{ "values": [ "RM Sales Code A", "RM Sales Code B", "RM Sales Code C", "RM Sales Code D", "RM Sales Code E"]}';
    $scope.rmSalesCodeValues = JSON.parse(rmSalesCodeDrpDwnValues);

    var lmNameDrpDwnValues = '{ "values": [ "LM Name A", "LM Name B", "LM Name C", "LM Name D", "LM Name E"]}';
    $scope.lmNameValues = JSON.parse(lmNameDrpDwnValues);

    var accountTypeDwnValues = '{ "values": [ "Account Type A", "Account Type B", "Account Type C", "Account Type D", "Account Type E"]}';
    $scope.accountTypeValues = JSON.parse(accountTypeDwnValues);


    $scope.rmTaggingSave = function () {
        $scope.show = !$scope.show;
    }

    $scope.rmTaggingNext = function () {
        $location.path('/kycwriteup'); 
        $('#myTab a[href="#!kycwriteup"]').tab('show');
    }

    $scope.kycWriteupPrevious = function () {
        $location.path('/rmTagging'); 
        $('#myTab a[href="#!rmTagging"]').tab('show');
    }

    $scope.kycWriteupSaveAsDraft = function () {
        $scope.showKycWriteupJson = !$scope.showKycWriteupJson;
    }

    $scope.kycWriteupSaveAndNext = function () {
        $location.path('/riskAssessment'); 
        $('#myTab a[href="#!riskAssessment"]').tab('show');
    }

    $scope.kycwriteup = {};


    
  });


