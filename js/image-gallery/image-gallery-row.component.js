angular.module('marsApp').component('imageGalleryRow', {
    templateUrl: 'js/image-gallery/image-gallery-row.html',
    controller: imageGalleryControllerRow,
    bindings: {
        imageData: '<'
    }
});

function imageGalleryControllerRow(){
    this.$onChanges = function(changes){
        this.imageData = changes.imageData.currentValue || [];
        if(this.imageData.length > 0){
            this.cameraIndex = 0;
        }
    };
    this.getFormattedDate = function(date){
        return moment(date).format('MMMM DD, YYYY');
    }
}