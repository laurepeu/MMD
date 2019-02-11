// Make the fade in appear !
$(document).ready(function () {
    $('#big-logo').hide().fadeIn(10000);
});


$(document).ready(function () {
    $('#logo-letter').hide().fadeIn(10000);
});


$(document).ready(function () {
    $('#msg3').hide().fadeIn(20000);
});

//  slick librairy
    

function initSlider(){
  $('.references').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 10,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    autoplay: true,
    prevArrow: '<div class="slick-prev"><i class favarrow="fas fa-chevron-left"></i></div>',
    nextArrow: '<div class="slick-next"><i class favarrow="fas fa-chevron-right"></i></div>'
  });
}

$(document).ready(function() {
initSlider();
});

// Make the letters appears ! 
var showText1 = function (target, message, index, interval) {    
  if (index < message.length) { 
    $(target).append(message[index++]); 
    setTimeout(function () { showText1(target, message, index, interval); },80); 
  } 
}

var showText2 = function (target, message, index, interval) {    
    if (index < message.length) { 
      $(target).append(message[index++]); 
      setTimeout(function () { showText2(target, message, index, interval); },100); 
    } 
  }

$(function () { 
 
  showText1("#msg1", "D’abord on va se rencontrer et vous allez vous raconter" , 0, 2000);    
 
}); 

$(function () { 
 
    showText2("#msg2", "Ensuite on va vous accompagner, on va vous révéler, et vous allez tout gagner ! ", 0, 2000);    
   
  }); 



//Fixer la navbar

$(function(){
    // On recupere la position du bloc par rapport au haut du site
    var position_top_raccourci = $("#navbar-wagon").offset().top;
    
    //Au scroll dans la fenetre on déclenche la fonction
    $(window).scroll(function () {
    
    //si on a defile de plus de 150px du haut vers le bas
    if ($(this).scrollTop() > position_top_raccourci) {
    
    //on ajoute la classe "fixNavigation" a <div id="navigation">
    $('#navbar-wagon').addClass("fixNavigation"); 
    } else {
    
    //sinon on retire la classe "fixNavigation" a <div id="navigation">
    $('#navbar-wagon').removeClass("fixNavigation");
    }
    });
    });



