angular.module('marsApp').factory('roverImageService',['$http', '$q', roverImageService]);

function roverImageService($http, $q){
    var apiKey = 'aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM';
    var date = '2017-01-23';
    var service = {
        getCuriosityImages: getCuriosityImages,
        getOpportunityImages: getOpportunityImages
    };
    return service;

    function getCuriosityImages(){
        return getImages('curiosity');
    }
    function getOpportunityImages(){
        return getImages('opportunity');
    }
    function getImages(rover){
        return $http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/'+ rover +'/photos?earth_date='+ date +'&api_key='+apiKey, {cache: 'true'});
    }
}