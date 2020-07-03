$(document).ready(function($) {
  let input = $("#intext");  //Присваиваем переменной input тегу input с индексом intext
  input.on("input", function() {  //подписываемся на событие ввода (input) для тега input
    let value = $(this).val(); // присваиваем переменной value значение введенное в input
    if (value === "Привет") {  // если введенное значение = "Привет" - выыодим alert - 555
      alert(555);
    } else {  // в других случаях выводим в консоль "неправильно"
      console.log("Неправильно");
    }
  });
});
