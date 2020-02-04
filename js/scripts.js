//Business Logic

function returnStrings(number, string1, string2, string3) {
  return(number + string1 + string2 + string3);




  
}

//Change the below values, based on which skin/theme is being used
let a = "TiK";
let b = "ToK";
let c = "Now the party don't start 'til I walk in.";


//UI Logic
$(document).ready(function() {
  //console.log('jquery is working');
  $("form#number-form").submit(function(event) {
    //console.log('form has submitted');
    $("#button-submit").hide();
    $("#button-reload").show();

    let inputValue = $("#number-input").val();

   // $("#result").append(returnStrings(inputValue, a, b, c));

    for (let i = 0; i<=inputValue; i++) {
      if (i.includes("3")) {
        console.log("TiK");
      } else if (i.includes("2")) {
        console.log("ToK");
      } else if (i.includes("1")) {
        console.log(`Now the party don't start 'til I walk in.`);
      } else {
        console.log(i);
    }

    // for (let i = 1; i <= inputValue; i++) {
    //   if (i % 15 ===0) {
    //     console.log("ping-pong");
    //     $("#result").append("Ping Pong!<br>");
    //   } else if (i % 3 === 0) {
    //     console.log("ping");
    //     $("#result").append("Ping!<br>");
    //   } else if (i % 5 === 0) {
    //     console.log("pong");
    //     $("#result").append("Pong!<br>");
    //   } else {
    //     console.log(i);
    //     $("#result").append(`<span class="text-secondary">${i}</span><br>`);
    //   }
    // }


    $("#results-div").show();

    //Clear the input field
    let inputArea = document.getElementById("number-input");
    inputArea.value = "";
    //Prevent the form from attempting to send data to a server
    event.preventDefault();
  });

  //Button to reload the page
  $("#button-reload").click(function() {
    location.reload();
  });

});