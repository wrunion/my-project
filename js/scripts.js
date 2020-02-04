//Business Logic

let printArray = [];

function kubricWasAnAbusiveMisogynist() {
  printArray.push("0");
  printArray.push("Beep!");
  printArray.push("Boop!");
  printArray.push(`I refuse to quote Kubric for any reason, so enjoy these inspirational quotes from a modern day poet laureate instead:`);
}

// function returnStrings(number, a, b, c) {
//   let firstOne = "First One";
//   let firstTwo = "First Two";
//   let firstThree = "Fuck Kubric";
//   let a = "a"
//   let b = "b"
//   let c = "c";
//   let returnArray = [];
  
//   for (let i = 0; i <= number; i++) {
//     console.log(i);
//     returnArray.push(i);
//   }
//   console.log(returnArray);
//   return returnArray;
// }

//Change the below values, based on which skin/theme is being used
// let a = "TiK";
// let b = "ToK";
// let c = "Now the party don't start 'til I walk in.";
// let d = `I refuse to quote Kubric for any reason, so here's a collection of quotes from a modern day poet laureate instead:`;

//UI Logic
$(document).ready(function() {
  //console.log('jquery is working');
  $("form#number-form").submit(function(event) {
    //console.log('form has submitted');
    $("#form-start").hide();
    let inputValue = $("#number-input").val();

    console.log(typeof inputValue);
   // $("#result").append(returnStrings(inputValue, a, b, c));

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

    kubricWasAnAbusiveMisogynist();
    console.log(printArray);

    printArray.forEach(function(e) {
      $("#result-ul").append(`<li>${e}</li>`)
    });

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