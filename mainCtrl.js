angular.module('GitHubReposetory')
  .controller('MainCtrl', ['$scope', '$http', function($scope, $http) {

    var onUserComplete = function(response) {
      $scope.repos = null;
      $scope.repos = response.data.items;
    };

    var onError = function(error) {
      console.log("error");
    };

    $scope.onUserSearch = function(searchRequest) {
      var mysearch = "https://api.github.com/search/repositories?q=" + searchRequest;
      $scope.search = searchRequest;
      console.log(searchRequest);
      $http.get(mysearch).then(onUserComplete, onError);
    };

    $scope.addBookmark = function(repo) {
      HttpContext.Current.Items[repo.name] = repo;
    };


  }]);
