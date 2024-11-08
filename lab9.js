let display = document.getElementById('display');
    let buttons = Array.from(document.getElementsByClassName('btn'));

    let currentInput = '';  
    let previousInput = ''; 
    let isNewInput = false; 

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            let value = button.innerText;
            if (value === "=") {
                try {
                    previousInput = currentInput;
                    currentInput = eval(currentInput).toString(); 
                    isNewInput = true; 
                    display.value = currentInput;
                } catch (e) {
                    currentInput = "Ошибка"; 
                    display.value = currentInput;
                }
            }
            else if (value === "C") {
                currentInput = '';
                previousInput = '';
                isNewInput = false;
                display.value = currentInput;
            }
            else if (value === "<-") {
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput;
                isNewInput = false;
            }
            else {
                if (isNewInput) {
                    previousInput = currentInput;
                    currentInput = ''; 
                }
                
                currentInput += value; 
                display.value = currentInput;
            }
        });
    });

    


