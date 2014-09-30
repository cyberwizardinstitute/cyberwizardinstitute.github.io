var blinks = document.querySelectorAll('blink');
var visible = true;
setInterval(function () {
    visible = !visible;
    for (var i = 0; i < blinks.length; i++) {
        blinks[i].style.visibility = visible ? 'visible' : 'hidden';
    }
}, 500);
