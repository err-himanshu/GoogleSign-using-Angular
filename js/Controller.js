
/*
 * @Author- Hiamnshu Gupta
 * Date-Aug12, 2016
 * Change-History
 * Purpose- file responsible for login controller
 */

//controller for login
app.controller('loginController', function ($scope,$window,$http,GoogleService) {
    //function for login via google
    $scope.googleLogin  =   function($event) {
      $event.stopPropagation();
      $event.preventDefault();
      GoogleService.signIn().then(function (response) {
          $http.get("https://www.googleapis.com/plus/v1/people/me?access_token="+response.access_token).success(function(data) {
              console.log(data);
              /*
                  YOUR REST CODE HERE
               */
          }).then(function() {
          });
      });
  }
});
