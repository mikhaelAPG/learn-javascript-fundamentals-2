'use strict'; // Didalam mode strict, tidak memperbolehkan anda menggunakan variabel yang belum dideklarasikan sebelumnya.

let hadDriversLicense = false;
let passTest = true;

if (passTest) hadDriversLicense = true;
if (hadDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const if = 23;

function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

//function declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// const age1 = calcAge1(1991);
console.log(age1);

// function expression
// const age2 = calcAge2(1991);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);