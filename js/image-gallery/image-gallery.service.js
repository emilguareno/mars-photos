angular.module('marsApp').factory('imageGalleryService',['roverImageService', '$q', imageGalleryService]);

function imageGalleryService(roverImageService, $q){
    var service = {
        getRoverImagesByCamera: getRoverImagesByCamera
    };
    return service;

    function getRoverImages(){
        return $q.all([roverImageService.getCuriosityImages(), roverImageService.getOpportunityImages()]);
    }
    function getRoverImagesByCamera(){
        var deferred = $q.defer();
        getRoverImages().then(function(data){
            var curiosityData = data[0];
            var opportunityData = data[1];
            var curiosityImagesByCamera = groupCamerasByArray('curiosity', _.groupBy(curiosityData.data.photos, 'camera.name'));
            var opportunityImagesByCamera = groupCamerasByArray('opportunity', _.groupBy(opportunityData.data.photos, 'camera.name'));
            deferred.resolve({
                curiosityImages: curiosityImagesByCamera,
                opportunityImages: opportunityImagesByCamera
            });
        });
        return deferred.promise;
    }

    function groupCamerasByArray(rover, object){
        var arr = [];
        var counter = 0;
        _.forIn(object, function(value, key){
            arr[counter++] = {
                rover: rover,
                camera: key,
                photos: value
            }
        });
        return arr;
    }
}