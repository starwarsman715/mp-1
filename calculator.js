// Function to update the result display area with the given result
function updateResultDisplay(result) {
    const outputElement = document.getElementById("output");

    outputElement.innerHTML = String(result);

    // Change text color based on result value
    if (result < 0) {
        outputElement.style.color = "red"; // Change text color to red for negative results
    } else {
        outputElement.style.color = "black"; // Reset text color to black for non-negative results
    }
}

// Function to perform addition
function addition() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) + Number(second); // Calculate sum
    updateResultDisplay(result); // Update the display with the result
}

// Function to perform subtraction
function subtraction() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) - Number(second); // Calculate difference
    updateResultDisplay(result); // Update the display with the result
}

// Function to perform multiplication
function multiplication() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) * Number(second); // Calculate product
    updateResultDisplay(result); // Update the display with the result
}

// Function to perform division
function division() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) / Number(second); // Calculate quotient
    updateResultDisplay(result); // Update the display with the result
}

// Function to perform exponentiation
function power() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;

    let result = 1; // Initialize result
    for (let i = 0; i < second; i = i + 1) {
        result = first * result; // Calculate power using multiplication
    }
    updateResultDisplay(result); // Update the display with the result
}

// Function to clear input fields and reset output
function clearFields() {
    document.getElementById("first-number").value = ""; // Clear first number input
    document.getElementById("second-number").value = ""; // Clear second number input
    document.getElementById("output").innerHTML = ""; // Clear output display
    document.getElementById("output").style.color = "black"; // Reset text color to black
}
