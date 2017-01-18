# Login with google using Angular
# use
 Download the service file (GoogleService.js) and include in your index.html </br>

 inject this service into your controller </br>
 Now in your controller like this </br>

 app.controller('loginController', function ($scope,$window,$http,GoogleService) {
 });
 </br>
 call login via google service function 
     GoogleService.signIn().then(function (response) {
          $http.get("https://www.googleapis.com/plus/v1/people/me?access_token="+response.access_token).success(function(data) {
            $scope.user = data;
            console.log($scope.user);
          }).then(function() {
          });
   </br>
  Volla !!! check your console 
  
  [Demo](http://google-angular-signin.bitballoon.com/) 
   </br>
  Don't forget to enable Google+ Api and use your google project client-id 

#Thanks
