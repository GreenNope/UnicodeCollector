var ink = 0
var width = 0

function tick() {
  var bar = document.getElementById("progressBar")
  ink = ink + 1
  width++
  bar.style.width = width + "%"
}

while 1=1 do {
  tick()
  
}
