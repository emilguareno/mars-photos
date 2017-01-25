angular.module('marsApp').factory('imageOfTheDayService',['roverImageService', '$q', imageOfTheDayService]);

function imageOfTheDayService(roverImageService, $q){
    var service = {
        getRandomImage: getRandomImage
    };
    return service;

    function getRandomImage(){
        var deferred = $q.defer();
        roverImageService.getCuriosityImages().then(function(data){
            var items = data.data.photos;
            deferred.resolve(items[Math.floor(Math.random()*items.length)]);
        });
        return deferred.promise;
    }
}