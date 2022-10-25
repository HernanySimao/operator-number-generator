function takeU() {
  const unitel = { pfx1: 92, pfx2: 93, pfx3: 94 }
  var fistpfx = [];
  var secontpfx = [];
  var terpfx = [];

  for (let i = 8; i > 1; i--) {
    var sorteiaPrimeiro = Math.floor(Math.random() * 10);
    fistpfx.push(sorteiaPrimeiro)

    var sorteiaSegundo = Math.floor(Math.random() * 10);
    secontpfx.push(sorteiaSegundo)

    var sorteiateceiro = Math.floor(Math.random() * 10);
    terpfx.push(sorteiateceiro)
  }

  const seuPrimeiroNumero = fistpfx.join('')
  document.getElementById('id1').append(unitel.pfx1 + "" + seuPrimeiroNumero + "\n")

  const seuSegundoNumero = secontpfx.join('')
  document.getElementById('id2').append(unitel.pfx2 + "" + seuSegundoNumero + "\n")

  const seuTerceiroNumero = terpfx.join('')
  document.getElementById('id3').append(unitel.pfx3 + "" + seuTerceiroNumero + "\n")

}


function takeM() {
  const movicel = { pfx1: 91, pfx2: 99 }
  var fistpfx = [];
  var secontpfx = [];

  for (let i = 8; i > 1; i--) {
    var sorteiaPrimeiro = Math.floor(Math.random() * 10);
    fistpfx.push(sorteiaPrimeiro)

    var sorteiaSegundo = Math.floor(Math.random() * 10);
    secontpfx.push(sorteiaSegundo)
  }

  const seuPrimeiroNumero = fistpfx.join('')
  document.getElementById('id1').append(movicel.pfx1 + "" + seuPrimeiroNumero + "\n")
  const seuSegundoNumero = secontpfx.join('')
  document.getElementById('id2').append(movicel.pfx2 + "" + seuSegundoNumero + "\n")

}




function takeA() {
  const africell = { pfx1: 95 }
  var fistpfx = [];

  for (let i = 8; i > 1; i--) {
    var sorteiaPrimeiro = Math.floor(Math.random() * 10);
    fistpfx.push(sorteiaPrimeiro)
  }

  const seuPrimeiroNumero = fistpfx.join('')
  document.getElementById('id1').append(africell.pfx1 + "" + seuPrimeiroNumero + "\n")
}






