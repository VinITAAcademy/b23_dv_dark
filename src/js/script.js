// start modal burger menu

//end modal burger menu


//start we provide video poster
/* $('.slick-test').slick(); */


var videos = $(".video");

videos.on("click", function () {
    var elm = $(this),
        conts = elm.contents(),
        le = conts.length,
        ifr = null;

    for (var i = 0; i < le; i++) {
        if (conts[i].nodeType == 8) ifr = conts[i].textContent;
    }

    elm.addClass("player").html(ifr);
    elm.off("click");
});

var videos2 = $(".video_with_autoplay");
videos2.on("click", function () {
    var elm = $(this),
        conts = elm.contents(),
        le = conts.length,
        ifr = null;

    for (var i = 0; i < le; i++) {
        if (conts[i].nodeType == 8) ifr = conts[i].textContent;
    }

    elm.addClass("player").html(ifr);
    elm.off("click");
    $("#video1")[0].src += "&autoplay=1";
    
});
//start we provide video poster


//start logo of partners
$(".owl-carousel").owlCarousel({
    items: 2,
    nav: true,
    loop: true,
    navText: ["<div class='icon-arrow-left'></div>","<div class='icon-arrow-right'></div>"]
});
//end logo of partners