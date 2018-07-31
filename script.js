let container = document.querySelector("#container")
let sphere = document.querySelector("#sphere")
let y = 1.5

sphere.addEventListener('click', addbox)

function addbox() {
  y += 1
  container.innerHTML += `<a-box color="dodgerblue" depth="0.5" height="0.5" width="0.5" position='0 ${y} -5'></a-box>`
}