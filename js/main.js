/*------------------
        Preloader
    --------------------*/
$(window).on("load", function () {
  $(".loader").fadeOut();
  $("#preloader").delay(200).fadeOut("slow");
});

/*------------------
      Sticky Navbar
    --------------------*/
function navbar() {
  var nav = $("#nav");
  var preH = $("#anchor").offset().top;

  if (window.scrollY >= preH - 100) {
    nav.addClass("nav-outer-sticky");
  } else {
    nav.removeClass("nav-outer-sticky");
  }
}
/*------------------
        Parallax
    --------------------*/
// var org = $(".bg-text").position().top;
// function parallax(ele, speed) {
//   console.log(org);
//   $(ele)
//     .first()
//     .css("top", (org + window.scrollY) * speed);
// }

/*------------------
        TimeLine
    --------------------*/
var selectors = {
  id: $("#timeline-1"),
  item: $("#timeline-1").find(".timeline-item"),
  activeClass: "timeline-item--active",
  img: ".timeline__img",
};

function timeline() {
  var max, min;
  var pos = window.scrollY;
  selectors.item.each(function () {
    if (!$(this).hasClass(selectors.activeClass)) {
      offset = $(this).offset().top;
      min = offset - 100;
      max = $(this).height() + offset - 40;
      if (pos <= max && pos >= min) {
        selectors.id.css(
          "background-image",
          "url(" + $(this).find(selectors.img).attr("src") + ")"
        );
        selectors.item.removeClass(selectors.activeClass);
        $(this).addClass(selectors.activeClass);
      }
    }
  });
}

/*------------------
        On scroll
    --------------------*/
window.addEventListener("scroll", function () {
  navbar();
  timeline();
});
