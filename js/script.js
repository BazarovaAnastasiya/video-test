document.addEventListener('dblclick', function (e) {
  return false; 
});

   var video = document.querySelector('.video');
  //           window.addEventListener('focus', () => {
  //               video.play();
  //           })




video.addEventListener('canplay', function(e) {
 this.play();
}, false);

//let video = document.getElementById('video');
window.addEventListener('focus', () => {
video.play();
}) 
// window.addEventListener('focus', () => {
// video.play();
// })


// video.addEventListener('pause', () => {
// video.play();
// alert(play);
// })



// let hasPlayed = false;

// function handleFirstPlay(event) {
//   if(hasPlayed === false) {
//     hasPlayed = true;

//     let vid = event.target;

//     vid.onplay = null;
//     }
// }
// video.addEventListener('blur', () => {
// video.play();
// alert(noplay);
// })
//   var video = document.querySelectorAll('video');

//   video.addEventListener( 'pause' , function () {
//         if (video.paused === true)
//         {
//             video.play();}
//   });
//   window.addEventListener('onload', function () {
//      alert("я в фокусе");
//      if (video === 'pause') {
//          document.querySelectorAll('video').play();
//      }
// });
//   window.addEventListener('focus', function (event) {
//   alert("привет");
//          document.querySelectorAll('video').play();
//          event.preventDefault();
//     event.stopPropagation();
  
// });
