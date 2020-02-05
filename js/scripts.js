//Business Logic

function returnStrings(number, string1, string2, string3) {

  for (let i = 0; i<=number; i++) {
    if (i.toString().includes("3")) {
      console.log(c);
      return `<li class="full-quote">${c}</li>`;
    } else if (i.toString().includes("2")) {
     console.log(b); 
     return `<li class="tok">${b}</li>`;
    } else if (i.toString().includes("1")) {
      console.log(a);
      $("#result").append(`<li class="tik">${a}</li>`);
    } else {
      console.log(i.toString());
      $("#result").append(`<ul>${i.toString()}</ul>`);
    }
  }

  //return(number + string1 + string2 + string3);
}

//Change the below values, based on which skin/theme is being used
let a = "TiK";
let b = "ToK";
let c = "Now the party don't start 'til I walk in.";
let d = `I refuse to quote Kubric for any reason, so here's a collection of quotes from a modern day poet laureate instead:`;

//UI Logic
$(document).ready(function() {
  //console.log('jquery is working');
  $("form#number-form").submit(function(event) {
    //console.log('form has submitted');
    $("#form-start").hide();
    let inputValue = $("#number-input").val();

    console.log(typeof inputValue);
   // $("#result").append(returnStrings(inputValue, a, b, c));

    for (let i = 0; i<=inputValue; i++) {
        if (i.toString().includes("3")) {
        console.log(c);
        $("#result").append(`<ul>${c}</ul>`);
      } else if (i.toString().includes("2")) {
       console.log(b); 
       $("#result").append(`<ul>${b}</ul>`);
      } else if (i.toString().includes("1")) {
        console.log(a);
        $("#result").append(`<ul>${a}</ul>`);
      } else {
        console.log(i.toString());
        $("#result").append(`<ul>${i.toString()}</ul>`);
      }
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
    //Prevent the form from trying & failing to send data to a server. Prevents form submission error.
    event.preventDefault();
    });

  //Button to reload the page
  $("#button-reload").click(function() {
    location.reload();
  });

}); 