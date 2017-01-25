angular.module('marsApp', [
  'ui.router',
]).config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  var states = [{
    name: 'imageOfTheDay',
    url: '/',
    component: 'dailyImage'
  },
  {
    name: 'imageGallery',
    url: '/image-gallery',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }]
  $urlRouterProvider.otherwise('/');
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
}]);