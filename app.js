
// Easy 1
const numbers = [2, 4, 7, 11, 15, 16]

let odd = numbers.filter(n => n % 2);
let even = numbers.filter(n => n % 2 === 0);

console.log(odd);
console.log(even);


// // Medium 1
// let user = prompt("Type a Letter");
// function vowelChecker(user) {
//     if (user == "a" || "e" || "i" || "o" || "u") {
//         return console.log("This is a vowel");
//     } else {
//         return console.log("This is NOT a vowel");
//     }
// };

// vowelChecker(user);

// //Medium 2 Jalynn

// function anagram(x, z) {
//     let len1 = x.length;
//     let len2 = z.length;
//     if (len1 !== len2) {
//         console.log('Invalid Input');
//         return
//     }
//     let str1 = x.split('').sort().join('');
//     let str2 = z.split('').sort().join('');
//     if (str1 === str2) {
//         console.log("True");
//     } else {
//         console.log("False");
//     }
// }
// anagram("children", "nerdlihc")

// // Medium 3
// let num1 = prompt("Choose a 3 digit number");
// let num2 = prompt("Choose another 3 digit number");
// let y = num1;
// let x = num2;
// let quotient = Math.floor(y / x);
// let remainder = y % x;

// function bigNumber() {
//     if (remainder === 0) {
//         alert(`${quotient}`)
//     } else if (remainder > 0) {
//         alert(`Biggest number is ${quotient} and remainder is ${remainder}`)
//     } else {
//         alert("Try Again")
//     }
// };

// bigNumber();


// // Hard 1

