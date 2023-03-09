var saibaMais = 0
$(document).ready(function () {
  botaoSaibaMais()
})

const botaoSaibaMais = () => {
  $("#saiba").click(() => {
    if (saibaMais === 0) {
      $(".card").removeClass("oculto")
      $("#saiba").html("Saiba menos")
      saibaMais = 1
    } else if (saibaMais === 1) {
      $(".mostrar").addClass("oculto")
      $("#saiba").html("Saiba mais")
      saibaMais = 0
    }
  })
}
