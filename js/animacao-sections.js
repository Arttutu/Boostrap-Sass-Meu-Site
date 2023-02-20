$(document).ready(function () {
  $(window).on("scroll", function () {
    $(".animate-on-scroll").each(function () {
      var element = $(this)
      if (
        element.offset().top <
        $(window).scrollTop() + $(window).height() * 0.7
      ) {
        element.addClass("animate")
      }
    })
  })
  $(".icones").hover(function () {
    $(this).siblings(".descricao").toggle()
  })
})
