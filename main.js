var ink = 0

function tick() {
  var bar = document.getElementById("progressBar")
  ink = ink + 1
  bar.style.width = ink + "%"
}


setInterval(tick, 1000)
  
