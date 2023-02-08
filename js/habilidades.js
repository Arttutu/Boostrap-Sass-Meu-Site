$(". habilidade ").click(function () {
  $(".descricao").hide()
  $("#" + $(this).data("descricao")).show()
})
