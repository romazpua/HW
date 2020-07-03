jQuery(document).ready(function($) {
  $("form").on("submit", function(event) {
    event.preventDefault();
  });

  $("#name").on("blur", function() {
    let name = $("#name").val().length;

    if (name < 2) {
      console.log("Слишком короткое имя");
    } else {
      console.log("Подходит");
    }
  });
});
