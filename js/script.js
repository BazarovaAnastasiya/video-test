document.addEventListener('dblclick', function (e) {
  return false; 
});

<<<<<<< HEAD
   var video = document.querySelector('video');
            window.addEventListener('focus', () => {
                video.play();
            })
=======
   //var video = document.querySelector('video');
  //           window.addEventListener('focus', () => {
  //               video.play();
  //           })
>>>>>>> f4b15bd9d411ec12e9848005c976241db3c5602f




video.addEventListener('canplay', function(e) {
<<<<<<< HEAD
this.play();
=======
 this.play();
>>>>>>> f4b15bd9d411ec12e9848005c976241db3c5602f
}, false);

// let video = document.getElementById('video');
// window.addEventListener('focus', () => {
// video.play();
// }) 
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
