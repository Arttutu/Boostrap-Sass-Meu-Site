var text = "Olá, Eu sou Arthur Gomes Desenvolvedor de software"
var barra = "|"
var typingSpeed = 70
var charIndex = 0

$(document).ready(function () {
  animateTexto()
  animateSeta()
})
function animateTexto() {
  setInterval(function () {
    if (charIndex < text.length) {
      $("#animate-titulo").append(text[charIndex])
      charIndex++
    } else if (charIndex == text.length) {
      charIndex++
      $(".animate-barra").append(barra)
    } else {
      $(".animate-barra").fadeOut(1000)
      $(".animate-barra").fadeIn(1000)
    }
  }, typingSpeed)
}
