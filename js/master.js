/***************************************/
// 새로고침 시 맨 상단으로
window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};
/***************************************/
// 라이브러리 초기화

$(document).ready(function () {
  AOS.init();
});

/***************************************/
//scroll 위치에 따른 nav 배경색 변화
window.addEventListener("scroll", navColorChange);
const target = document.querySelector("section#sub-page-aboutus");
const targetPosition = target.getBoundingClientRect().top;
const navObject = document.querySelector("nav");

function navColorChange() {
  let scrollY = document.documentElement.scrollTop;
  if (scrollY >= targetPosition) {
    navObject.classList.add("navColor");
  } else navObject.classList.remove("navColor");
}

/***************************************/
// 좌 우 슬라이드 박스 - product
$(document).ready(function () {
  $("#slide-list").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $("#prv-btn"),
    nextArrow: $("#nxt-btn"),
    dots: true,
  });
});

/***************************************/
// a 태그 링크 이동
$(document).ready(function () {
  $("#logo-wrap > a").click(function () {
    var scrollposition = $($(this).attr("href")).offset().top;
    $("html").animate(
      {
        scrollTop: scrollposition,
      },
      600
    );
  });
  $("#next-btn").click(function () {
    var scrollposition = $($(this).attr("href")).offset().top;
    $("html").animate(
      {
        scrollTop: scrollposition,
      },
      600
    );
  });
  $(".nav-list-item > a").click(function () {
    var scrollposition = $($(this).attr("href")).offset().top;
    $("html").animate(
      {
        scrollTop: scrollposition,
      },
      600
    );
  });
  $(".foot-col:nth-of-type(3) .foot-list > li > a").click(function () {
    var scrollposition = $($(this).attr("href")).offset().top;
    $("html").animate(
      {
        scrollTop: scrollposition,
      },
      600
    );
  });
  $(".foot-col:nth-of-type(1) a").click(function () {
    var scrollposition = $($(this).attr("href")).offset().top;
    $("html").animate(
      {
        scrollTop: scrollposition,
      },
      600
    );
  });
});

/***************************************/
//좌 우 슬라이드 박스 - review

$(document).ready(function () {
  $("#reviews-prv-btn").click(function () {
    var item = $('input[name="reviews-item"]');

    if ($(item).eq(0).attr("checked")) {
      $(item).eq(0).removeAttr("checked");
      $(item).eq(2).attr("checked", true);
    } else if ($('input[name="reviews-item"]:eq(1)').attr("checked")) {
      $(item).eq(1).removeAttr("checked");
      $(item).eq(0).attr("checked", true);
    } else if ($('input[name="reviews-item"]:eq(2)').attr("checked")) {
      $(item).eq(2).removeAttr("checked");
      $(item).eq(1).attr("checked", true);
    }
  });
  $("#reviews-nxt-btn").click(function () {
    var item = $('input[name="reviews-item"]');

    if ($(item).eq(0).attr("checked")) {
      $(item).eq(0).removeAttr("checked");
      $(item).eq(1).attr("checked", true);
    } else if ($('input[name="reviews-item"]:eq(1)').attr("checked")) {
      $(item).eq(1).removeAttr("checked");
      $(item).eq(2).attr("checked", true);
    } else if ($('input[name="reviews-item"]:eq(2)').attr("checked")) {
      $(item).eq(2).removeAttr("checked");
      $(item).eq(0).attr("checked", true);
    }
  });
});

/***************************************/
// range 조작 이벤트
$(document).ready(function () {
  var range = $('input[name="bar-value"]');

  range.on({
    mousedown: function () {
      $(".slick-dots").animate({
        opacity: "0",
      });
    },
    mouseup: function () {
      $(".slick-dots").animate({
        opacity: "1",
      });
    },
    input: function () {
      var slide = $(".slick-track");
      var dots = $('li[role="presentation"]');
      var slide_attr = $(".slick-track > div").css("width").replace("px", "");
      var slide_index = Number(slide_attr) * 3; //한 슬라이드의 아이템 width의 합
      var filter = $(".range-filter");

      if ($(this).val() == 0) {
        filter.eq(0).siblings().removeClass("name-color");
        filter.eq(0).addClass("name-color");
        slide.css({
          transition: "transform 500ms ease",
          transform: "translate3d(-" + slide_index * 1 + "px, 0px, 0px)",
        });
      } else if ($(this).val() == 35) {
        filter.eq(1).siblings().removeClass("name-color");
        filter.eq(1).addClass("name-color");
        slide.css({
          transition: "transform 500ms ease",
          transform: "translate3d(-" + slide_index * 2 + "px, 0px, 0px)",
        });
      } else if ($(this).val() == 65) {
        filter.eq(2).siblings().removeClass("name-color");
        filter.eq(2).addClass("name-color");
        slide.css({
          transition: "transform 500ms ease",
          transform: "translate3d(-" + slide_index * 3 + "px, 0px, 0px)",
        });
      } else if ($(this).val() == 100) {
        filter.eq(3).siblings().removeClass("name-color");
        filter.eq(3).addClass("name-color");
        slide.css({
          transition: "transform 500ms ease",
          transform: "translate3d(-" + slide_index * 4 + "px, 0px, 0px)",
        });
      }
    },
  });
});
