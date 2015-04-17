//= require_tree .

ready(function() {
  var timer = setInterval(nextImage, 5000);
  var curImage = 1;
  var numImages = 3;

  function nextImage() {
    var slide = document.getElementsByClassName('slide-' + curImage)[0];

    slide.classList.remove('active');

    curImage++;
    if (curImage > numImages) {
      curImage = 1;
    }

    slide = document.getElementsByClassName('slide-' + curImage)[0];
    slide.classList.add('active');
  }
});
