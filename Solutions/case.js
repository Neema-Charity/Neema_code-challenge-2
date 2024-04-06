// Prompts the user to input a string and store it in the userInput variable
let userInput = prompt('Please input a string');

// Calls the swapCase function and passes the userInput as an argument
swapCase(userInput);

// Declares the swapCase function which takes a string as input and swaps the case of each character
function swapCase(_userInput) {
    // Initialize an empty string to store the final swapped string
    let final = " ";

    // Iterate over each character in the userInput string
    for (let c = 0; c <= _userInput.length; c++) {
        // Get the current character at index c
        let charac = _userInput.charAt(c);

        // Check if the current character is uppercase
        if (charac === charac.toUpperCase()) {
            // If it is uppercase, convert it to lowercase and add it to the final string
            final += charac.toLowerCase();
        } else {
            // If it is lowercase, convert it to uppercase and add it to the final string
            final += charac.toUpperCase();
        }
    }

    // Display an alert with the final swapped string
    alert(final);
}