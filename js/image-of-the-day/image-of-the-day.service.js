angular.module('marsApp').factory('imageOfTheDayService',['roverImageService', imageOfTheDayService]);

function imageOfTheDayService(roverImageService){
    var service = {
        getRandomImage: getRandomImage
    };
    return service;

    function getRandomImage(){
        roverImageService.getCuriosityImages().then(function(data){
            console.log(data);
        })
    }
}