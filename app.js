let display_value = '';
let first_val = '';
let second_val = '';
let operator_val = '';
const numbers = document.querySelectorAll('.number');
const clear_val = document.querySelector('.clear');
const operator_sign = document.querySelectorAll('.operation');
const equal_sign = document.querySelector('.equal');

numbers.forEach(number => number.addEventListener('click', () => display_number(number.textContent)));
clear_val.addEventListener('click', () => clear());
operator_sign.forEach(sign => sign.addEventListener('click',() => sign_val(sign.textContent)));
equal_sign.addEventListener('click', () => operate(first_val,display_value,operator_val));

function display_number(number) {
    display_value += String(number);
    document.getElementById('display').textContent = `${display_value}`;
    console.log(number);
}

function sign_val(sign) {
    first_val = display_value;
    operator_val = sign;
    console.log(first_val, operator_val)
    clear();
}

function clear() {
    document.getElementById('display').textContent = '0';
    display_value = '';
}


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
    let a_val = parseInt(a)
    let b_val = parseInt(b);
    console.log(a_val, typeof a_val)
    console.log(b_val, typeof b_val)
    console.log(a,b,sign);
    if (sign === "+") {
        document.getElementById('display').textContent = `${add(a_val,b_val)}`;
        display_value = add(a_val,b_val);
    } else if (sign === "-") {
        document.getElementById('display').textContent = `${subtract(a_val,b_val)}`;
        display_value = subtract(a_val,b_val);
    } else if (sign === "%") {
        document.getElementById('display').textContent = `${divide(a,b)}`;
        display_value = divide(a,b);
    } else if (sign === "x") {
        document.getElementById('display').textContent = `${multiply(a,b)}`;
        display_value = multiply(a,b);
    }
}

