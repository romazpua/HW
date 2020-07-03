$(document).ready(function($) {
  $(".prev__item").on("click", function() {
    // подписываемся на нажатие превьюшки
    let indexVid = $(this).index(); // присваиваем переменной значение индекса элемента (превьюшки)
    $(".full__item")
      .eq(indexVid)
      .addClass("active")
      .siblings()
      .removeClass("active"); // обращаемся к видео по индексу превьюшки который равен индексу виде и присваиваем этому видео класс .active а у соседей удаляем .active
  });
  $(".layerBtn").on("click", function() {
    $(".layer").removeClass("hide");
    $(this)
      .parent()
      .addClass("hide");
    let video = $(this).parents('.layer.hide').siblings('iframe');
    let src = video.attr('src');
    video.attr('src', src + '&autoplay=1');
  });
});
