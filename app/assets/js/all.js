console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');

  // menu__item add .active
  $(".menu .menu__item").click(function (e) {
    e.preventDefault();
    $(".menu .menu__item").removeClass("active");
    $(this).addClass("active");
  });

  // pagination add .active
  $(".pagination .page").click(function (e) {
    e.preventDefault();
    $(".pagination .page").removeClass("active");
    $(this).addClass("active");
  });


  // user-modal switch open
  $("#user-modal .modal-switch").click(function (e) {
    e.preventDefault();
    $("#user-modal .modal-switch").toggleClass("active");
    $("#user-modal .modal-options").toggleClass("active");
  });
});
