var saibaMais = 0
$(document).ready(function () {
  botaoSaibaMais()
})

const botaoSaibaMais = () => {
  $("#saiba-mais").click(() => {
    if (saibaMais === 0) {
      $(".card").removeClass("oculto")
      $("#saiba-mais").html("Saiba menos")
      saibaMais = 1
    } else if (saibaMais === 1) {
      $(".mostrar").addClass("oculto")
      $("#saiba-mais").html("Saiba mais")
      saibaMais = 0
    }
  })
}
