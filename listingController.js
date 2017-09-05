//TODO: Make shit look nice
//TODO: Form stuff
//TODO: Why do some details not show

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

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(index) {
        $scope.detailedInfo = {
          name: $scope.listings[index].name,
          address: $scope.listings[index].address,
          latitude: $scope.listings[index].coordinates.latitude,
          longitude: $scope.listings[index].coordinates.longitude
        }
    };
  }
]);
