// Prompts the user to input a number and converts it to an integer, then assigns it to the variable numberOne
let numberOne = parseInt(prompt('Please input a number'));

// Prompts the user to input a second number and converts it to an integer, then assigns it to the variable numberTwo
let numberTwo = parseInt(prompt('Please input a second number'));

// Calls the arrayGenerator function and passes numberOne and numberTwo as arguments
arrayGenerator(numberOne, numberTwo);

// Declares the arrayGenerator function which takes two numbers as input and generates an array of numbers between them
function arrayGenerator(numberOne, numberTwo) {
    // Initializes an empty array to store the generated numbers
    let array = [];
    
    // Loop froms numberOne to numberTwo 
    for (let i = numberOne; i <= numberTwo; i++) {
        // Pushes the current number (i) into the array
        array.push(i);
    }
    
    // Alerts the user of the generated array
    alert(array);
}
