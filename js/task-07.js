const fontSize = document.getElementById("font-size-control")
const text = document.getElementById("text")


fontSize.addEventListener('input', () => { 
    const textFontSize= fontSize.value + "px"
text.style.fontSize = textFontSize

    })
