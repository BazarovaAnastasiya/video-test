document.addEventListener('dblclick', function (e) {
  return false; 
});


window.onload = function() {
  var video = document.querySelectorAll('video');
  video.addEventListener( 'pause' , function () {
        if (video.paused === true)
        {
            video.play();}
  });
  
};
