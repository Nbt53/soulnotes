module.exports.log = (message) => {
  var logOutput = document.getElementById('log-output');
  var logMessage = document.createElement('p');
  logMessage.textContent = message;
  logOutput.appendChild(logMessage);
}

module.exports.playVideo = () => {
  if (document.getElementById('video-element') != null && document.getElementById('video-element').paused) {
    document.getElementById('video-element').play();
    alert('play')
  }
}

module.exports.openAccordion = (element) => {

}


//   <script>
//   <div id="log-output"></div>
// function log(message) {
//     var logOutput = document.getElementById('log-output');
//     var logMessage = document.createElement('p');
//     logMessage.textContent = message;
//     logOutput.appendChild(logMessage);

// }

// log('hi')
// var video = document.getElementById('video-element');

// video.addEventListener('loadedmetadata', function (e) {
//    console.log(e)
//     log('Video metadata loaded.' + e);
// });

// video.addEventListener('canplay', function () {
//     log('Video can start playing.');
// });

// video.addEventListener('canplaythrough', function () {
//     log('Video can play through without buffering.');
// });

// video.addEventListener('error', function () {
//     log('Error occurred while loading the video.');
// });

// video.addEventListener('ended', function () {
//     log('Video playback ended.');
// });

// video.addEventListener('play', function () {
//     log('Video playback started.');
// });

// video.addEventListener('pause', function () {
//     log('Video playback paused.');
// });

// </script>