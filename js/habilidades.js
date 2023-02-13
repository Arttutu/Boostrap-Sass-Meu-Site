$(document).ready(function () {
  animateHabilidade()
  habilidadeAtiva()
})
function animateHabilidade() {
  $(".fa-bootstrap").click(function () {
    $(".descricao").fadeOut(function () {
      $(".descricao").text("Essa é a descricao do Bootstrap").fadeIn(500)
    })
  })
  $(".fa-css3").click(function () {
    $(".descricao").fadeOut(function () {
      $(".descricao").text("Essa é a descricao do CSS3").fadeIn(500)
    })
  })
}
function habilidadeAtiva() {
  $(".icon").click(function () {
    $(".icon").removeClass("active")
    $(this).addClass("active")
  })
}
