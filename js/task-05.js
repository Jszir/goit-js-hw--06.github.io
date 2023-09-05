const output = document.querySelector("#name-output")
const input = document.querySelector("#name-input")

input.addEventListener ('input', () => { 
        const inputValue = input.value  
    
        if(inputValue === '') { 
            output.textContent = "Anonymous";
        }
            else { output.textContent= inputValue

            }
        })
