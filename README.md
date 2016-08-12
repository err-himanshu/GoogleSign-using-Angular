# Login with google using Angular
 download the service file (GoogleService.js) and include in your index.html

after download include inject and that file into your controller like

app.controller('loginController', function ($scope,$window,$http,GoogleService) {

and call this GoogleService.signIn().then(function (response) {

});

for more detail please have a look on controller file and afer login please check your console

#Thanks
