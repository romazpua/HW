jQuery(document).ready(function($) {
  let url = location.href;
  // url страницы назначаем в переменную url
  let hash = url.split("#")[1];
  // делим url по знаку "#" на 2 части, которые образуют массив, и присваиваем перемонной hash значение 2-го элемента полученого массива
  $("#" + hash) // находим элемент с id со значением переменной hash
    .addClass("show") // добавляем ему класс show
    .siblings() // а у соседей
    .removeClass("show"); // убираем класс show
  let btn = $('.tabs__navItemLink[data-id="' + hash + '"]'); // находим элемент с атрибутом data-id со значением переменной hash
  btn.addClass("active"); // и добавляем этому элементу класс active

  let link = $(".tabs__navItemLink"); // находим элементы с классом .tabs__navItemLink и присваиваем их переменной link
  link.on("click", function() {
    $(this) // при клике на выбранный элемент
      .addClass("active") // добавляем ему класс .active
      .siblings() // а у его соседей
      .removeClass("active"); // убираем класс .active
    setTimeout(() => {
      // запускаем функцию тайм-аут и через 50 мс (см. ниже)
      let url = location.href; // url страницы назначаем в переменную url
      let hash = url.split("#")[1]; // делим url по знаку "#" на 2 части, которые образуют массив, и присваиваем перемонной hash значение 2-го элемента полученого массива
      $("#" + hash) // находим элемент с id со значением переменной hash
        .addClass("show") // добавляем ему класс show
        .siblings() // а у соседей
        .removeClass("show"); // убираем класс show
    }, 50);
  });

  //   let link = $(".tabs__navItemLink");
  //   link.on("click", function() {
  //     $(this)
  //       .parent()
  //       .addClass("active")
  //       .siblings()
  //       .removeClass("active");

  // setTimeout(() => {
  //   let url = location.href;
  //   let hash = url.split("#")[1];
  //   $("#" + hash)
  //     .addClass("show")
  //     .siblings()
  //     .removeClass("show");
  // }, 50);
  //   });

  let lastTheme = localStorage.getItem("theme"); // берем значение из localStorage (последнее сохраненное) и присваиваем его переменной lastTheme
  if (lastTheme == "white") { // если оно равно white
    $("body").removeClass("dark"); // то удаляем у body класс dark
  } else { // если нет то
    $("body").addClass("dark"); // то добавляем body класс dark и
    $("input").prop("checked", true); // переводим переключатель тем в состояние вкл
  }

  let themeBtn = $("input"); // подписываемся на изменение 
  themeBtn.change(function() { // переключателя тем
    let newTheme = $("input").prop("checked"); // берем значение свойства input и присваиваем его переменной newTheme
    if (newTheme == false) { // если переменная newTheme равна false то
      localStorage.setItem("theme", "white"); // записываем в localStorage ключ theme со значением white и
      $("body").removeClass("dark"); // у body удаляем класс dark
    } else { // если нет то
      localStorage.setItem("theme", "dark"); // записываем в localStorage ключ theme со значением dark и 
      $("body").addClass("dark"); // к body добавляем класс dark
    }
  });
});
