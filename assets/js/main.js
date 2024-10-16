$(function () {
  "use strict";

  const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
  document.documentElement.style.setProperty('--main-bg-color', randomColor);

  function checkInternet() {
    if (!navigator.onLine) {
      window.location.href = window.location.origin + "/no-internet.html"
    }
  }

  window.addEventListener('load', checkInternet);

  window.addEventListener('online', function online() {
    window.location.href = "index.html"
  });
  window.addEventListener('offline', function offline() {
    window.location.href = "no-internet.html"
  });

  $(".btn-mobile-filter-close").on("click", function () {
      $(".filter-sidebar").addClass("d-none");
    }),


    $(".mobile-search-button").on("click", function () {

      $(".searchbar").addClass("full-search-bar")

    }),

    $(".search-close-icon").on("click", function () {

      $(".searchbar").removeClass("full-search-bar")

    })



  //Side nav

  $(function () {

    $('#sidenav').metisMenu();

  });



  // Acive Menu

  $(function () {
    for (var e = window.location, o = $(".metismenu li a").filter(function () {
        return this.href == e
      }).addClass("").parent().addClass("mm-active"); o.is("li");) o = o.parent("").addClass("mm-show").parent("").addClass("mm-active")
  });


  // Theme Switch

  // $("#DarkMode").on("click", function() {
  //   $("html").toggleClass("dark-theme")
  // });




  // cookies




});