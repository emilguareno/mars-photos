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
    component: 'imageGallery'
  }]
  $urlRouterProvider.otherwise('/');
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
}]);