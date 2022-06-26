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

let button = document.getElementsByTagName('button');
const displayValue = document.getElementById('screen')
const numberButton = document.getElementsByClassName('number-button')
console.log(numberButton)
// seven.addEventListener('click', () => 
//         screen.textContent = seven.textContent);