var ink = 0

function tick() {
  var bar = document.getElementById("progressBar")
  ink = ink + 1
  bar.style.width = ink + "%"
}

while 1=1 do {
  wait(1)
  tick()
  
}
