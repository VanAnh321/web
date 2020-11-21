var index = 1;

changeimg = function() {
    var imgs = ["img/img1.png", "img/img2.png", "img/img3.png", "img/img4.png"];
    document.getElementById("img").src = imgs[index];
    index++;
    if (index == 4) {
        index = 0;
    }
}
setInterval(changeimg, 500)