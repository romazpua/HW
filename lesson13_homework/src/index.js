// jQuery(document).ready(function($) {});
// window.addEventListener("load", function () {
//     let menuBtn = document.querySelector('.header__burger');
//     menuBtn.addEventListener('click', function (){
//         let navigation = document.querySelector('.header__list');
//         navigation.classList.toggle('active');
//     })
// })
$(document).ready(function() {
  let menuBtn = $(".header__burger");
  menuBtn.on("click", function() {
    let navigation = $(".header__list");
    navigation.toggleClass("active");
  });
});
