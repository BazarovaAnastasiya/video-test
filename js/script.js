document.addEventListener('dblclick', function (e) {
  return false; 
});



  var video = document.querySelectorAll('video');
  video.addEventListener( 'pause' , function () {
        if (video.paused === true)
        {
            video.play();}
  });
  window.addEventListener('message', function (event) {
     if (event.data.method === 'play') {
         document.querySelectorAll('video').play();
     }
});