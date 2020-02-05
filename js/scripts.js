//Business Logic

let printArray = [];

//Let's get this part out of the way first, so we can get on with the real logic
function kubricWasAnAbusiveMisogynist() {
  printArray.push("0");
  printArray.push("Beep!");
  printArray.push("Boop!");
  printArray.push(`I refuse to quote Kubric for any reason, so enjoy these inspirational quotes from a modern day poet laureate instead:`);
}

//Here's the function that meets the assignment parameters
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

//Declare strings that will be used to populate the ul
// let a = "";
// let b = "";
// let c = "";

//UI Logic
$(document).ready(function() {

  //Write a function to check the skin
  //let skin = $("body")
  $("form#number-form").submit(function(event) {
    $("#form-start").hide();
    let input = $("#number-input").val();

    let a = "";
    let b = "";
    let c = "";

    //Change the below values, based on which theme is being used (can also be made into user inputs)
    let a = "TiK";
    let b = "ToK";
    let c = "Now the party don't start 'til I walk in.";

    //Populate results list with the first four unique entries
    kubricWasAnAbusiveMisogynist();

    //Use looping and branching logic to fulfill the parameters of the assignment
    actualAssignment(input, a, b, c);
    console.log(printArray);
    printArray.forEach(function(e) {
      $("#result-ul").append(`<li>${e}</li>`)
    });

   

    // for (let i = 0; i<=inputValue; i++) {
    //   if (i === 3) {
    //     console.log(d);
    //     $("#result").append(`<ul>${d}</ul>`);
    //   } else if (i.toString().includes("3")) {
    //     console.log(c);
    //     $("#result").append(`<ul>${c}</ul>`);
    //   } else if (i.toString().includes("2")) {
    //    console.log(b); 
    //    $("#result").append(`<ul>${b}</ul>`);
    //   } else if (i.toString().includes("1")) {
    //     console.log(a);
    //     $("#result").append(`<ul>${a}</ul>`);
    //   } else {
    //     console.log(i.toString());
    //     $("#result").append(`<ul>${i.toString()}</ul>`);
    //   }
    // }

    //returnStrings(10);

  

    $("#results-div").show();

    //Clear the input field
    let inputArea = document.getElementById("number-input");
    inputArea.value = "";
    //Prevent the form from trying & failing to send data to a server. Prevents form submission error.
    event.preventDefault();
    });

  //Button to reload the page
  $("#button-reload").click(function() {
    location.reload();
  });

}); 