document.addEventListener('dblclick', function (e) {
  return false; 
});



  var video = document.querySelectorAll('video');

  video.addEventListener( 'pause' , function () {
        if (video.paused === true)
        {
            video.play();}
  });
  window.addEventListener('focus', function () {
     if (video === 'pause') {
         document.querySelectorAll('video').play();
     }
});
  window.addEventListener('focus', function (event) {

         document.querySelectorAll('video').play();
         event.preventDefault();
    event.stopPropagation();
    alert("Контекстное меню кнопки");
});