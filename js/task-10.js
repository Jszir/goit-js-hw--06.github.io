
const controls = document.getElementById("controls")  
const createButton =  document.querySelector("button[data-create]")
const destroyButton = document.querySelector("button[data-destroy]")

const containerBoxes = document.getElementById("boxes")

function createBoxes(amount) { 
for (let i = 0; i < amount; i++ ) { 
  const box = document.createElement("div");
  box.style.width = `${30 + (i * 10)}px`
  box.style.height = `${30 + (i * 10)}px`
  box.style.backgroundColor = getRandomHexColor()
  containerBoxes.appendChild(box)
}
}

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  function destroyBoxes() { 
    while (containerBoxes.firstChild) {
      containerBoxes.removeChild(containerBoxes.firstChild);
  }}
  
createButton.addEventListener('click', () => {
  const numberElements =  parseInt(controls.querySelector("input").value);
  createBoxes(numberElements)
})

destroyButton.addEventListener('click', () => { 
 destroyBoxes()
  
})

