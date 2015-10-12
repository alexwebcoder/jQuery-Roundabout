/*Will look in carousel_data; find every carousel_item and for each carousel_item that it finds, it is going to pull the html out of the class of image and it will put it into the id of carousel*/

var startingItem = 3;
$(document).ready(function(){

	$('.carousel_data .carousel_item').each(function(){

		$('#carousel').append($(this).find('.image').html());


	});
    createCarousel();
    showCaption();


});


function createCarousel(){

	$('div#carousel').roundabout({
     
     //childselector tells the roundabout plugin what items inside the carousel div id that it needs to reposition in the circle  
      childSelector: 'img',
      startingChild: window.startingItem,
      tilt:-4.5, //gives the 3d effect of the items in the back vs the items in the front
      minOpacity:1,//sets the opacity of the tea pots
      minScale:0.45, // this is how small the items get when they are in the background
      duration:1200, //amount of miliseconds it takes a clicked item to spin around into the foreground
      clickToFocus: true,
      clickToFocusCallback: showCaption

	});

	createCustomButton();

}


function createCustomButton(){

 	$('.nextItem').click(function(){
      hideCaption();
 		$('div#carousel').roundabout('animateToNextChild', showCaption);

 	});

 	$('.prevItem').click(function(){
      hideCaption();
 		$('div#carousel').roundabout('animateToPreviousChild', showCaption);

 	});

  $('div#carousel img').click(function(){
    hideCaption();

  });
}
//shows the captions div
function showCaption(){

	var childInFocus = $('div#carousel').data('roundabout').childInFocus;
	var setCaption = $('.carousel_data .carousel_item .caption:eq('+childInFocus+')').html();
   $('#captions').html(setCaption);
   var newHeight = $('#captions').height()+'px';
   $('.caption_container').animate({'height':newHeight},500, function(){
      $('#captions').animate({'opacity':1},250);

   });

}
//fades out captions div
function hideCaption(){

  $('#captions').animate({'opacity':0},250);

}