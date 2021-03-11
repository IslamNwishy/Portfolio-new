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
function navbar(navId, anchorId) {
  var nav = $(navId);
  var preH = $(anchorId).offset().top;

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
selectors.item.eq(0).addClass(selectors.activeClass);
selectors.id.css(
  "background-image",
  "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
);
var busy = false;

function timeline() {
  var max, min;
  var pos = window.scrollY;
  selectors.item.each(function () {
    if (!$(this).hasClass(selectors.activeClass) && !busy) {
      busy = true;
      min = $(this).offset().top - screen.height / 3;
      max = $(this).height() + $(this).offset().top - 40;
      if (pos <= max && pos >= min) {
        selectors.id.css(
          "background-image",
          "url(" + $(this).find(selectors.img).attr("src") + ")"
        );
        selectors.item.removeClass(selectors.activeClass);
        $(this).addClass(selectors.activeClass);
      }
      busy = false;
    }
  });
}

/*------------------
        On scroll
    --------------------*/
window.addEventListener("scroll", function () {
  navbar("#nav", "#anchor");
  timeline();
});
