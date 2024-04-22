
function Triangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return true;
    } else {
        return false;
    }
}

let a = parseFloat(prompt("Введіть довжину першої сторони:"));
let b = parseFloat(prompt("Введіть довжину другої сторони:"));
let c = parseFloat(prompt("Введіть довжину третьої сторони:"));

if (Triangle(a, b, c)) {
    console.log("Можливо створити трикутник з цих сторін.");
} else {
    console.log("Не можливо створити трикутник з цих сторін.");
}
// function solveQuadraticEquation(a, b, c) {
//     let discriminant = b * b - 4 * a * c;
//     let solutions = [];

//     if (discriminant > 0) {
//         let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         solutions.push(x1, x2);
//     } else if (discriminant === 0) {
//         let x = -b / (2 * a);
//         solutions.push(x);
//     }
//     // else if (discriminant < 0) {
//     //     // Комплексні корені, якщо потрібно обробити їх
//     // }

//     return solutions;
// }

// // Приклад використання:
// let a = 1;
// let b = -3;
// let c = 2;
// let roots = solveQuadraticEquation(a, b, c);
// console.log("Корені рівняння:", roots);