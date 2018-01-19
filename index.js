$('#slideshow1 > div:gt(0)').hide();

setInterval(function() {
  $('#slideshow1 > div:first')
    .hide()
    .next()
    .show()
    .end()
    .appendTo('#slideshow1');
}, 2000);

$('#slideshow2 > div:gt(0)').hide();

setInterval(function() {
  $('#slideshow2 > div:first')
    .hide()
    .next()
    .show()
    .end()
    .appendTo('#slideshow2');
}, 2000);

$('#slideshow3 > div:gt(0)').hide();

setInterval(function() {
  $('#slideshow3 > div:first')
    .hide()
    .next()
    .show()
    .end()
    .appendTo('#slideshow3');
}, 2000);

$('#slideshow4 > div:gt(0)').hide();

setInterval(function() {
  $('#slideshow4 > div:first')
    .hide()
    .next()
    .show()
    .end()
    .appendTo('#slideshow4');
}, 2000);

$('#slideshow5 > div:gt(0)').hide();

setInterval(function() {
  $('#slideshow5 > div:first')
    .hide()
    .next()
    .show()
    .end()
    .appendTo('#slideshow5');
}, 2000);

$('#slideshow6 > div:gt(0)').hide();

setInterval(function() {
  $('#slideshow6 > div:first')
    .hide()
    .next()
    .show()
    .end()
    .appendTo('#slideshow6');
}, 1000);

$('#slideshow7 > div:gt(0)').hide();

setInterval(function() {
  $('#slideshow7 > div:first')
    .hide()
    .next()
    .show()
    .end()
    .appendTo('#slideshow7');
}, 2000);

$('#slideshow8 > div:gt(0)').hide();

setInterval(function() {
  $('#slideshow8 > div:first')
    .hide()
    .next()
    .show()
    .end()
    .appendTo('#slideshow8');
}, 2500);

$('#slideshow9> div:gt(0)').hide();

setInterval(function() {
  $('#slideshow9 > div:first')
    .hide()
    .next()
    .show()
    .end()
    .appendTo('#slideshow9');
}, 2500);

$('#slideshow10> div:gt(0)').hide();

setInterval(function() {
  $('#slideshow10 > div:first')
    .hide()
    .next()
    .show()
    .end()
    .appendTo('#slideshow10');
}, 2500);

var allVideoProjects = Array.from(document.querySelectorAll('.project.video'));

function showWindowSize() {
  var h = $(window).height(),
    w = $(window).width();
  $('#winSize').html('<div>' + w + 'x' + h + '</div>');
}

function checkForVisibleVideo() {
  var lastSelectedVideo = document.querySelector('.selected-video');
  var visibleVideoProject = allVideoProjects.filter(function(project) {
    return window.getComputedStyle(project).display === 'block';
  })[0];
  if (visibleVideoProject) {
    var video = visibleVideoProject.querySelector('iframe');
    if (video && !video.classList.contains('selected-video')) {
      video.classList.add('selected-video');
      video.src = video.dataset.src;
    }
  } else if (lastSelectedVideo) {
    lastSelectedVideo.classList.remove('selected-video');
    lastSelectedVideo.src = '';
    lastSelectedVideo = undefined;
  }
}

checkForVisibleVideo();
showWindowSize();

window.addEventListener('resize', function() {
  showWindowSize();

  // Fade out explenation text
  $('#tuto').addClass('animated-hide');

  $(document).ready(function() {
    $(window).resize(function() {
      $('#tuto').hide();
    });
  });

  // Handle visible videos
  checkForVisibleVideo();
});
