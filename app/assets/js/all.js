console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');

  // menu__item add .active
  $(".menu .menu__item").click(function (e) {
    e.preventDefault();
    $(".menu .menu__item").removeClass("active");
    $(this).addClass("active");
  });

  // menu__item add .active
  $(".pagination .page").click(function (e) {
    e.preventDefault();
    $(".pagination .page").removeClass("active");
    $(this).addClass("active");
  });
});
