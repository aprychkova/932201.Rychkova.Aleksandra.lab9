let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));

let currentInput = '';  
let previousInput = ''; 
let isNewInput = false; 
let lastOperator = '';  // Переменная для отслеживания последнего оператора

buttons.forEach(button => {
    button.addEventListener('click', function() {
        let value = button.innerText;

        // Если нажата клавиша "="
        if (value === "=") {
            try {
                // Оценка выражения
                previousInput = currentInput;
                currentInput = eval(currentInput).toString(); 
                isNewInput = true; 
                display.value = currentInput;
            } catch (e) {
                currentInput = "Ошибка"; 
                display.value = currentInput;
            }
        }

        // Если нажата клавиша "C" (Очистить)
        else if (value === "C") {
            currentInput = '';
            previousInput = '';
            isNewInput = false;
            lastOperator = '';
            display.value = currentInput;
        }

        // Если нажата клавиша "<-" (Удалить последний символ)
        else if (value === "<-") {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
            isNewInput = false;
        }

        // Проверка на операторы и точки
        else if (['+', '-', '*', '/'].includes(value)) {
            // Запрещаем ввод нескольких операторов подряд
            if (['+', '-', '*', '/'].includes(currentInput.slice(-1))) {
                currentInput = currentInput.slice(0, -1); 
            }
            currentInput += value; 
            lastOperator = value; // Обновляем последний оператор
            display.value = currentInput;
            isNewInput = false;
        }

        // Проверка на точку
        else if (value === '.') {
            // Запрещаем ввод точки, если она уже есть в числе
            let currentNumber = currentInput.split(/[+\-*/]/).pop();  // Получаем последнее число
            if (currentNumber.includes('.')) {
                return;  // Если в текущем числе уже есть точка, ничего не делаем
            }
            currentInput += value;
            display.value = currentInput;
            isNewInput = false;
        }

        // Для обычных чисел
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


    


