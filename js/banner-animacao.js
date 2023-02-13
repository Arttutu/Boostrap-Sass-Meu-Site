$(document).ready(function () {
  var text = "Olá, Eu sou Arthur Gomes Desenvolvedor Front-end"
  var barra = "|"
  var typingSpeed = 70
  var charIndex = 0

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
})
