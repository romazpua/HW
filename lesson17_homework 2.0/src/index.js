$(document).ready(function($) {
  $(".prev__item").on("click", function() {
    // подписываемся на нажатие превьюшки
    let indexVid = $(this).index(); // присваиваем переменной значение индекса элемента (превьюшки)
    $(".layer")
      .eq(indexVid)
      .addClass("active")
      .siblings()
      .removeClass("active"); // обращаемся к видео по индексу превьюшки который равен индексу видео и присваиваем этому видео класс .active а у соседей удаляем .active
    let src = $(".layer.active").data("src");
    let Src = "https://www.youtube.com/embed/";
    $("iframe").attr("src", Src + src);
  });
  $(".layer").on("click", function() {
    $(this).removeClass("active");
    let srcVid = $("iframe").attr("src");
    $("iframe").attr(
      "src",
      srcVid +
        "?enablejsapi=1&version=3&showinfo=0&playerapiid=ytplayer&autoplay=1"
    );
  });

  $(".div").on("click", function() {
    console.log($(this).text());
  });
  $("input").on("input", $.debounce(500, ourFunc));
  function ourFunc() {
    let value = $(this).val();
    let div3 = $(".div3");
    div3.text(value);
    localStorage.setItem("test", value);
  }
  $(".div3").on("click", function() {
    localStorage.removeItem("test");
  });
  let p1 = $(".pic1");
  let p2 = $(".pic2");
  p1.on("click", function() {
    let src = $(".pic").attr("src");
    let dataSrc = $(this).data("src");
    $(".pic").attr("src", `./img/${dataSrc}.png`);
  });
});
