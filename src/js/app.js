var headline = document.getElementsByClassName('space-change');
var image = document.getElementsByClassName('image');

console.log(image);

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

function animate() {
    headline[0].classList.add('display');
    image[0].classList.add('display');
    var counter = 0;
    var timer = setInterval(function(){ loop() }, 1000);

    function loop() {
        var displayImage = document.querySelector('.image.display');
        var displayHeadline = document.querySelector('.space-change.display');
        displayImage.classList.remove('display');
        displayHeadline.classList.remove('display');
        image[counter].classList.add('display');
        headline[counter].classList.add('display');
        console.log(counter);
        counter ++;

        if(counter === (image.length)) {
            stop();
            setTimeout(function(){
                finish();
            }, 1000)
        }
    }

    function finish() {
        var displayImage = document.querySelector('.image.display');
        var finalImage = document.querySelector('.final-image');
        var displayHeadline = document.querySelector('.space-change.display');
        var finalHeadline = document.querySelector('.final-title');
        displayImage.classList.remove('display');
        finalImage.classList.add('display');
        displayHeadline.classList.remove('display');
        finalHeadline.classList.add('display');
    }

    function stop() {
        clearInterval(timer);
    }
}

function bubbles() {
    var bubbles = document.getElementsByClassName('splash_bubbles');
    var animate = document.getElementsByClassName('bubble');
    document.addEventListener('scroll', function(){
        console.log('scrolling');
        for(var i=0; i < bubbles.length; i++) {
            if(elementInViewport(bubbles[i])) {
                console.log('inview');
                animate[i].classList.add('animate');
            }
            else {
                animate[i].classList.remove('animate');
            }
        }
    });
}

function init(){
    animate();
    bubbles()
}

init();
