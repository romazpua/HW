$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    center: true,
    items: 2,
    nav: true,
    loop: false,
    responsive: {
      992: {
        items: 4,
      },
      756: {
        items: 3,
      },
      576: {
        items: 2,
      },
      320: {
        items: 1,
      },
    },
  });

  let menuBtn = $(".header__menu");
  menuBtn.on("click", function() {
    let navigation = $(".header__list");
    navigation.toggleClass("active");
  });

  let btnact = $(".projects__navBtn");
  let allShow = $(".project__item");
  let mobAppShow = $(".mobApp");
  let identShow = $(".ident");
  let designShow = $(".design");
  let uiuxShow = $(".uiux");
  if ($("#all").hasClass("active")) {
    allShow.addClass("show");
  }
  btnact.on("click", function() {
    btnact.siblings(".projects__navBtn").removeClass("active");
    $(this).addClass("active");
    if ($("#all").hasClass("active")) {
      allShow.addClass("show");
    } else {
      allShow.removeClass("show");
    }
    if ($("#mobApp").hasClass("active")) {
      mobAppShow.addClass("show");
    }
    if ($("#ident").hasClass("active")) {
      identShow.addClass("show");
    }
    if ($("#design").hasClass("active")) {
      designShow.addClass("show");
    }
    if ($("#uiux").hasClass("active")) {
      uiuxShow.addClass("show");
    }
  });

  let btn = $("#upBtn");
  $(window).scroll(function() {
    if ($(window).scrollTop() > 600) {
      btn.addClass("showBtn");
    } else {
      btn.removeClass("showBtn");
    }
  });

  let up = $(".upBtn");
  up.on("click", function() {
    let href = $(up).attr("href");
    let dest = $(href).offset().top;
    $("body,html").animate({ scrollTop: dest }, 1000);
  });
});
