
/*
 Author- Himanshu Gupta
 Date- Aug12, 2016
 Purpose- Service for login through Google
 */

'use strict';
app.service('GoogleService', function($q,$window){

//signin method
     this.signIn = function () {
         var defered = $q.defer();
         $window.signinCallback = function (response) {
             if(response.access_token != undefined) {
                 defered.resolve(response);
             }
             else{
                 defered.reject(response);
             }
         };

         $window.connectGoogle = function() {
             gapi.auth.authorize({
                 client_id: "", //your google client ID , make sure you have enabled the google+ Api
                 cookiepolicy: "single_host_origin",
                 immediate: false,
                 scope: "https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read https://www.googleapis.com/auth/plus.me",
             }, function(response) {
                 if (response.status.signed_in) {
                     signinCallback(response);
                 }
             });
         };
         //authorize a user
         gapi.auth.authorize({
             client_id: "",//your google client ID , make sure you have enabled the google+ Api
             cookiepolicy: "single_host_origin",
             immediate: true,
             scope: "https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read https://www.googleapis.com/auth/plus.me",
         }, function(response) {
           //if already logged in callback else connect with google and then callback
             if (response.status.signed_in) {
                 signinCallback(response);
             } else {
                 connectGoogle();
             }
         });

         return defered.promise;
     };

     return this;
});
