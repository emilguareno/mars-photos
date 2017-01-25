angular.module('marsApp').component('dailyImage', {
    templateUrl: 'js/image-of-the-day/image-of-the-day.html',
    controller: ['imageOfTheDayService', imageOfTheDayController]
});

function imageOfTheDayController(imageOfTheDayService){
    imageOfTheDayService.getRandomImage().then(function(imageObject){
        this.imageSrc = imageObject.img_src;
        this.roverInfo = {
            name: imageObject.rover.name,
            camera: imageObject.camera.name,
            date: moment(imageObject.earth_date).format('MMMM DD, YYYY')
        }
    }.bind(this));
}