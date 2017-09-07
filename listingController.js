
angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */

    $scope.addListing = function() {
      var newListing = {
        "code": $scope.newCode,
        "name": $scope.newName,
        "coordinates":{
          "latitude": $scope.newLatitude,
          "longitude": $scope.newLongitude
        },
        "address": $scope.newAddress
      };
          Listings.push(newListing);

    };

    $scope.deleteListing = function(name) {
      var toDelete = $scope.listings.find(listing => {
          return listing.name == name;
        });
        $scope.listings.splice($scope.listings.indexOf(toDelete), 1);
    };


    $scope.showDetails = function(name) {
      var array = eval($scope.listings)
      var index = -1;
      for(let i = 0; i < array.length; i++){
        if(array[i].name == name){
          index = i;
          break;
        }
      }
        $scope.detailedInfo = $scope.listings[index];

    };

  }
]);
