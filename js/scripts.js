//Business Logic

let printArray = [];

//Here's the function that meets the assignment parameters, and is reusable for various string inputs
function actualAssignment(number, string1, string2, string3) {
  for (let i = 4; i <= number; i++) {
    if (i.toString().includes("3")) {
      printArray.push(string3);
    } else if (i.toString().includes("2")) {
      printArray.push(string2);
    } else if (i.toString().includes("1")) {
      printArray.push(string1);
    } else {
      printArray.push(i.toString());
    }
  }
}

//Here's my snarky function that handles (up to) the first four values in my return list
function kubricWasAnAbusiveMisogynist(number) {
  if (number <=3) {
    for (let i = 0; i <= number; i++) {
      if (i.toString().includes("3")) {
        printArray.push("(Insert brogrammer in-joke that makes everyone else feel uncomfortable here)");
      } else if (i.toString().includes("2")) {
        printArray.push("Boop!");
      } else if (i.toString().includes("1")) {
        printArray.push("Beep!");
      } else {
        printArray.push(i.toString());
      }
    }
  } else {
    for (let i = 0; i <= 3; i++) {
      if (i.toString().includes("3")) {
        printArray.push("I refuse to quote Kubric for any reason, so enjoy these inspirational quotes from a modern day poet laureate instead:");
      } else if (i.toString().includes("2")) {
        printArray.push("Boop!");
      } else if (i.toString().includes("1")) {
        printArray.push("Beep!");
      } else {
        printArray.push(i.toString());
      }
    }
  } 
}


//UI Logic
$(document).ready(function() {
  $("form#number-form").submit(function(event) {
    $("#form-start").hide();
    let input = $("#number-input").val();

    let a = "";
    let b = "";
    let c = "";

    //Stretch goal #1: Set the three string values via user input 
    
    //Stretch goal #2: Create multiple themes, and change the string values, based on which theme is being used 

    //For example, if (theme === "kesha") {
    [a, b, c] = ["TiK", "ToK", "Now the party don't start 'til I walk in."];
    //}
    
    //Populate results list with the first (up to) four unique entries
    kubricWasAnAbusiveMisogynist(input);

    //Use looping and branching to fulfill the parameters of the assignment
    actualAssignment(input, a, b, c);
    printArray.forEach(function(e) {
      $("#result-ul").append(`<li>${e}</li>`)
    });

    $("#results-div").show();

    //Prevent the form from trying & failing to send data to a server. Prevents form submission error.
    event.preventDefault();
    });

  //Button to reload the page
  $("#button-reload").click(function() {
    location.reload();
  });

}); 