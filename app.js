function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a/b;
}

function operate(a,b,sign) {
    if (sign === "+") {
        return add(a,b);
    } else if (sign === "-") {
        return subtract(a,b);
    } else if (sign === "/") {
        return divide(a,b);
    } else if (sign === "*") {
        return multiply(a,b);
    }
}

let display_value = '';

function display() {
    const numbers = document.querySelectorAll('.number')
    numbers.forEach(value => value.addEventListener('click', function() {
        display_value += String(value.innerHTML)
        console.log(display_value)
    }))
    
}

function clear() {
    const clear_val = document.querySelector('.clear')
    clear_val.addEventListener('click', () => display_value = '');
}

display();
clear();