let button = document.getElementsByTagName('button');
const displayValue = document.getElementById('display-value')
const numberButton = document.getElementsByClassName('number-button')
const operatorButton = document.getElementsByClassName('operator-button')
const clearButton = document.getElementById('clear');
console.log(numberButton)


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





function updateDisplay(number){
    if(displayValue.textContent == 0)
        {displayValue.textContent = ' ';}
    displayValue.textContent += number.textContent;
}

function clearDisplay(){
    displayValue.textContent = '0';
}







Array.from(numberButton).forEach((number) => 
        number.addEventListener('click', () => updateDisplay(number)))

Array.from(operatorButton).forEach((number) => 
number.addEventListener('click', () => 
displayValue.textContent += number.textContent))

clearButton.addEventListener('click', clearDisplay)

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