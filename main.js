var ink = 0

function tick() {
  var bar = document.getElementById("progressBar")
  ink = ink + 1
  bar.style.width = (ink/10*100) + "%"
  if ink/10*100 >= 90 then
    ink = 0
}


setInterval(tick, 1000)
  
