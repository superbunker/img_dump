// function sumAllNumbers() {
//     // Numbers from stockings and mittens
//     const numbers = [
//         1, 4, 6, // First row of stockings
//         5, 8,    // Second row of mittens
//         2, 3, 6, 8, // Third row of stockings
//         4, 5, 8   // Fourth row of mittens
//     ];

//     // Calculating the sum
//     const totalSum = numbers.reduce((acc, num) => acc + num, 0);
//     return totalSum;
// }

// // Output the result
// console.log(sumAllNumbers()); // Output: 60

// function sumNumbersAndCountObjects(numbers, totalObjects) {
//     const numberSum = numbers.reduce((acc, num) => acc + num, 0);
//     console.log(numberSum);
//     return numberSum + totalObjects;
// }

// // Numbers from the image
// const numbersFromImage = [1, 4, 6, 5, 8, 2, 6, 8, 4, 5, 8];

// // Total objects (16 stockings + 12 mittens)
// const totalObjects = 16 + 12;

// // Final result
// console.log(sumNumbersAndCountObjects(numbersFromImage, totalObjects)); // Output: 101

// Function to sum numbers and add the number of objects
function sumNumbersAndCountObjects(numbers, totalObjects) {
    const numberSum = numbers.reduce((acc, num) => acc + num, 0);
    return numberSum + totalObjects;
}

// Numbers from the image
const numbersFromImage = [1, 4, 6, 5, 8, 2, 3, 6, 8, 4, 5, 8];

// Total objects (16 stockings + 12 mittens)
const totalObjects = 16 + 12;

// Final result
console.log(sumNumbersAndCountObjects(numbersFromImage, totalObjects)); // Output: 85