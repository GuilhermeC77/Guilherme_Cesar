function iniciar() {
  var camposPretos = ["blocoSobre", "blocoProjetos"];
  for (var i in camposPretos) {
    $("." + camposPretos[i]).addClass("fundoPreto");
  }

  var camposBrancos = ["blocoHabilidades", "blocoSocial"];
  for (var i in camposBrancos) {
    $("." + camposBrancos[i]).addClass("fundoBranco");
  }
}