$(document).ready(() => {
  $(".sidebar-wrapper").load("/components/sidebar.html");
  $(".navbar-wrapper").load("/components/navbar.html");
  $(".footer-wrapper").load("/components/footer.html");
  $(".arrow-up-wrapper").load("/components/arrow-up.html");
});

$(window).scroll(() => {
  const hasScrolled = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
  $("#arrow-up").css("display", hasScrolled? "block" : "none")
});
