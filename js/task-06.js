const input = document.getElementById("validation-input")


input.addEventListener('blur', () => { 
    const allowedLength = parseInt(input.getAttribute('data-length'));
    const inputValue = input.value  



    if(inputValue.length === allowedLength ) { 
        input.classList.remove('invalid')
        input.classList.add('valid')
    }
        else { input.classList.remove('valid')
        input.classList.add('invalid')
 }
    })
