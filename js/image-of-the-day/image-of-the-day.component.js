angular.module('marsApp').component('dailyImage', {
    templateUrl: 'js/image-of-the-day/image-of-the-day.html',
    controller: ['imageOfTheDayService', imageOfTheDayController]
});

function imageOfTheDayController(imageOfTheDayService){
    imageOfTheDayService.getRandomImage();
}