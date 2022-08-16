console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');

  // menu__item add .active
  $(".menu .menu__item").click(function (e) {
    e.preventDefault();
    $(".menu .menu__item").removeClass("active");
    $(this).addClass("active");
  });
});
