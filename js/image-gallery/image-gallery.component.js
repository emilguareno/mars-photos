angular.module('marsApp').component('imageGallery', {
    templateUrl: 'js/image-gallery/image-gallery.html',
    controller: ['imageGalleryService', imageGalleryController]
});

function imageGalleryController(imageGalleryService){
    imageGalleryService.getRoverImagesByCamera().then(function(data){
        this.curiosityImages = data.curiosityImages;
        this.opportunityImages = data.opportunityImages;
    }.bind(this));
}