// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    $rootScope.doctors = [
        {id: 1, name: 'Richard Phung', phone: '8581234567', address: '56 Burritos Way', fom: 'OD'},
        {id: 2, name: 'Quang Nguyen', phone: '8587896541', address: '240 Monster Street', fom: 'OD'},
        {id: 3, name: 'John Jack', phone: '8587895682', address: '5433 Swag Avenue', fom: 'OD'}
    ];
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })
  
    .state('app.doctor', {
        url: '/doctor',
        views: {
            'menuContent': {
                templateUrl: 'templates/doctor.html',
                controller: 'DoctorCtrl'
            }
        }
    })
  
    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html'
            }
        }
    })
  
    .state('app.new_doctor', {
        url: '/doctor/new',
        views: {
            'menuContent': {
                templateUrl: 'templates/add_new_doctor.html',
                controller: 'DoctorCtrl'
            }
        }
    })
  
    .state('app.appointment', {
        url: '/appointment',
        views: {
            'menuContent': {
                templateUrl: 'templates/appointment.html',
                controller: 'AppointmentCtrl'
            }
        }
    })
        
    
    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});

