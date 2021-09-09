document.addEventListener('dblclick', function (e) {
  return false; 
});


$(document).ready(function () {
  
    $('.main__slider').slick({
        draggable:false,
        swipe: false,
        arrows: false,
        dots: false,
        infinite: true,
        fade: true,

        autoplay: true,
        autoplaySpeed: 4000,
          centerMode: true,
        slidesToShow: 1, 
    });
    
});
document.getElementById("next-1").onclick = function () {
  (document.getElementById("page__r2").style.display = "flex"),
   (document.getElementById("page__r1").style.display = "none");
};
document.getElementById("next-2").onclick = function () {
  (document.getElementById("page__r3").style.display = "flex"),
   (document.getElementById("page__r2").style.display = "none");
};