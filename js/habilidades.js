$(document).ready(function () {
  animateHabilidade()
  habilidadeAtiva()
})
function animateHabilidade() {
  $(".fa-bootstrap").hover(function () {
    $(".descricao").fadeOut(function () {
      $(".descricao")
        .text(
          "Bootstrap é um framework para desenvolvimento de páginas web responsivas e estilizadas. Tenho 6 meses de experiência na área"
        )
        .fadeIn(500)
    })
  })
  $(".fa-css3").hover(function () {
    $(".descricao").fadeOut(function () {
      $(".descricao")
        .text(
          "CSS é responsável pela estilização da página web. Tenho mais de 12 meses de experiência na área"
        )
        .fadeIn(500)
    })
  })
  $("fa-html5").hover(function () {
    $(".descricao").fadeOut(function () {
      $(".descricao")
        .text(
          "Sass é uma extensão do CSS que adiciona recursos como variáveis, funções e aninhamento para facilitar a escrita e manutenção de estilos em projetos web. Tenho 12 meses de experiência na área"
        )
        .fadeIn(500)
    })
  })
  $(".fa-sass").hover(function () {
    $(".descricao").fadeOut(function () {
      $(".descricao")
        .text(
          "Sass é uma extensão do CSS que adiciona recursos como variáveis, funções e aninhamento para facilitar a escrita e manutenção de estilos em projetos web. Tenho 3 meses de experiência na área"
        )
        .fadeIn(500)
    })
  })
  $(".fa-react").hover(function () {
    $(".descricao").fadeOut(function () {
      $(".descricao")
        .text(
          "React é uma biblioteca JavaScript para construção de interfaces de usuário. tenho 1 mês de experiência na área "
        )
        .fadeIn(500)
    })
  })
  $(".fa-js-square").hover(function () {
    $(".descricao").fadeOut(function () {
      $(".descricao")
        .text(
          "Javascript é uma linguagem de programação que junta HTML e CSS e é umas das três principais tecnologias web. Tenho 6 meses de experiência na área"
        )
        .fadeIn(500)
    })
  })
}
function habilidadeAtiva() {
  $(".icon").hover(function () {
    $(".icon").removeClass("active")
    $(this).addClass("active")
  })
}
