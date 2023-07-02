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

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// // console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

//function declaration
// const age1 = calcAge1(1991);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// function expression
// const age2 = calcAge2(1991);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// Arrow function
// const calcAge3 = birthYear => 2037-birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1990, 'Bob'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    // console.log(apples, oranges);
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

// const calcAge = function(year) {
//     return 2037 - year;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// coding challenge 1
const calcAverage = (varA, varB, varC) => (varA + varB + varC) / 3;
// test data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
// let scoreDolphins = calcAverage(85, 54, 41);
// let scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);


const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
    } else {
        console.log(`no team win`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);

// test data 2
// scoreDolphins = calcAverage(44, 23, 71);
// scoreKoalas = calcAverage(65, 54, 49);
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// array
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1994, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas'; 
const jonas = [firstName, 'Jonas', 'Schmedtmann', 2037 - 1991, friends];
console.log(jonas);
console.log(jonas.length);

// exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1867, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);