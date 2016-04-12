(function () {
        angular.module('TimeSuck')
            .controller('NavigationController', ['$scope', '$http', '$state',
        function ($scope, $http, $state) {
    
                        if(localStorage['User-Data']) {
                            $scope.loggedIn = true;
                    
                        } else {
                            $scope.loggedIn = false;
                        }
                        
                        $scope.logUserIn = function() {
                        console.log("Log User In: ");
                            
                        $http.post('api/user/login', $scope.login).success(function (response) {
                                localStorage.setItem('User-Data', JSON.stringify(response));
                            }).error(function(error) {
                                console.log(error);
                            });
                         }
                }
  ])
}());