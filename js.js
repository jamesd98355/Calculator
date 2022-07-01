const displayValue = document.getElementById('display-value')
const numberButton = document.getElementsByClassName('number-button')
const operatorButton = document.getElementsByClassName('operator-button')
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
const deleteButton = document.getElementById('delete');



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


// update display on delete click
deleteButton.addEventListener('click', deleteLastCharacter)

// calculate result from screen value
//split into array, every second value is operand and every other value is number 
function evaluate()
{
    const screenString = displayValue.textContent;
    if(displayValue.textContent == "0"){return}

    const numbers = screenString.match(/\d+/g);
    const operand = screenString.replace(/[0-9]/g, '');

    const result = operate(operand,numbers[0],numbers[1]);
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

function deleteLastCharacter(){
    displayValue.textContent = displayValue.textContent.slice(0,-1)
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