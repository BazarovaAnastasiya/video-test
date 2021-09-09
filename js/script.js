document.addEventListener('dblclick', function (e) {
  return false; 
});


window.onload = function() {
  var elem = document.querySelectorAll('video');
  var srcVideo = elem.getAttribute('src');
  elem.setAttribute('src', srcVideo + '&autoplay=1');
};
