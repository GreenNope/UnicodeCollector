var ink = 0
var width = 0

function tick() {
  var bar = document.getElementById("progressBar");
  ink = ink + 1
  width = (ink/10)*100
  bar.width = width + "%"
}

while true do {
  tick()
  
}
