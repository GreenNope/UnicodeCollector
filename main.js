var ink = 0

function tick() {
  var bar = document.getElementById("progressBar")
  ink = ink + 1
  bar.style.width = (ink/10*100) + "%"
  if (ink/10*100 >= 100) {
    ink = 0
    bar.style.width = "0%"
  }
}

document.getElementById("charBox").innerHTML = characters[0].visible


setInterval(tick, 1000)
  
