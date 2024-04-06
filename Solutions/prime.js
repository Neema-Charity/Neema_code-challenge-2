// Prompt the user to input a list of numbers separated by commas
let input = prompt('Please input a list of numbers separated by commas:');

// Call the getInitialArray function to convert the input string into an array of numbers
let initialArray = getInitialArray(input);


// Declare the getInitialArray function to convert the input string into an array of numbers
function getInitialArray(input) {
    // Split the input string by commas to get an array of strings of numbers
    let numbersAsString = input.split(',');
    
    // Convert each string number to an actual number using map
    let initialArray = numbersAsString.map(str => parseFloat(str));
    
    // Return the resulting array of numbers
    return initialArray;
}

// Declare the isPrime function to find and alert the prime numbers in the initial array
function isPrime(initialArray) {
    // Initialize an empty array to store the prime numbers
    let finalArray = [];
    
    // Iterate over each number in the initial array
    for (let number of initialArray) {
        // Check if the number is less than or equal to 1
        if (number <= 1) {
            // If so, alert the user 
            alert('Input a number greater than 1');
            
        }
        
        // Check if the number is prime
        let isPrime = true;
        
        // Iterate over each number from 2 to the square root of the current number
        for (let i = 2; i <= Math.sqrt(number); i++) {
            // Check if the current number is a divisor of the current number
            if (number % i === 0) {
                // If so, the number is not prime, so set the flag to false and exit the loop
                isPrime = false;
                break;
            }
        }
        
        // If the number is prime (isPrime flag is still true), push it to the finalArray
        if (isPrime) {
            finalArray.push(number);
        }
    }
    
    // Alert the user with the array of prime numbers
    alert(finalArray);
}

// Call the isPrime function to find and alert the prime numbers in the initial array
isPrime(initialArray);
