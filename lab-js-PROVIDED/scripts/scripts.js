/****************** create variables ******************/
/* Create variables to hold the values for modelName and duration */

let modelName = "XYZ"; // Default model
let duration = 0; // Default duration in days

/****************** helper function ******************/
/* 
Create a function called recalculate() which will:
- Create a variable to represent the calculated-cost span element.
- Check the value of the modelName variable and calculate the total cost.
- Set the value of the calculated-cost element's innerHTML to this new value.
*/

function recalculate() {
    // Get the calculated-cost span element
    let costLabel = document.getElementById("calculated-cost");
    let totalCost;

    // Calculate the total cost based on the modelName
    if (modelName === "XYZ") {
        totalCost = duration * 100; // Cost for Model XYZ
    } else if (modelName === "CPRG") {
        totalCost = duration * 213; // Cost for Model CPRG
    }

    // Update the cost in the HTML
    costLabel.innerHTML = "$" + totalCost.toFixed(2);
}

/****************** model button logic ******************/
/* 
- Create a variable to represent the "Switch Model" pseudo-button.
- Create a function called changeModel() to toggle between models.
- Update the model-text span element and recalculate the cost.
*/

let modelButton = document.getElementById("model-button"); // Get the model button element

function changeModel() {
    // Get the model-text span element
    let modelText = document.getElementById("model-text");

    // Toggle between models
    if (modelName === "XYZ") {
        modelName = "CPRG"; // Switch to CPRG
        modelText.innerHTML = "Model CPRG"; // Update model text
    } else {
        modelName = "XYZ"; // Switch to XYZ
        modelText.innerHTML = "Model XYZ"; // Update model text
    }

    recalculate(); // Update the cost after switching the model
}

// Attach the event listener to the button
modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/
/* 
- Create a variable to represent the "Change Duration" pseudo-button.
- Create a function called changeDuration() to prompt the user for duration.
- Update the duration-text span element and recalculate the cost.
*/

let durationButton = document.getElementById("duration-button"); // Get the duration button element

function changeDuration() {
    // Get the duration-text span element
    let durationText = document.getElementById("duration-text");

    // Prompt the user for a new duration
    let newDuration = prompt("Enter the new duration (in days):");

    // Validate the input and update the duration
    if (newDuration && !isNaN(newDuration)) {
        duration = parseInt(newDuration); // Update the duration variable
        durationText.innerHTML = duration; // Update the duration text
        recalculate(); // Update the cost after changing the duration
    } else {
        alert("Invalid input. Please enter a valid number."); // Alert for invalid input
    }
}

// Attach the event listener to the button
durationButton.addEventListener("click", changeDuration);
