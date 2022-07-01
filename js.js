const displayValue = document.getElementById('display-value')
const numberButton = document.getElementsByClassName('number-button')
const operatorButton = document.getElementsByClassName('operator-button')
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');



// update sceen on number click
Array.from(numberButton).forEach((number) => 
        number.addEventListener('click', () => updateDisplay(number)))

// update screen on uperator click
Array.from(operatorButton).forEach((number) => 
    number.addEventListener('click', () => 
            displayValue.textContent += number.textContent))

// clear screen on clear click
clearButton.addEventListener('click', clearDisplay)

// update display on equals click
equalsButton.addEventListener('click', evaluate)

// calculate result from screen value
//split into array, every second value is operand and every other value is number 
function evaluate()
{
    const screenString = displayValue.textContent;
    if(displayValue.textContent == "0"){return}
    const screenArray = screenString.split("");
    const firstNumber = screenArray[0];
    const operand = screenArray[1];
    const secondNumber = screenArray[2];

    const result = operate(operand,firstNumber,secondNumber);
    displayValue.textContent = result;
}

function updateDisplay(number){
    if(displayValue.textContent == 0)
        {displayValue.textContent = '';}
    displayValue.textContent += number.textContent;
}

function clearDisplay(){
    displayValue.textContent = '0';
}


function operate(operator, a, b){
    a = Number(a);
    b = Number(b);
    switch(operator){
        case '+': return add(a,b);
        case '-': return subtract(a,b);
        case 'x': return multiply(a,b);
        case '÷': return divide(a,b);
    }
}
const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a -b;
};

const multiply = function(a,b) {
    return a * b;
};

const divide = function(a,b) {
    return a/b;
};