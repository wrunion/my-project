//Business Logic

//UI Logic
$(document).ready(function() {
  //console.log('jquery is working');
  $("form#number-form").submit(function(event) {
    //console.log('form has submitted');

    let inputValue = $("#number-input").val();
    //console.log(inputValue);
    if (inputValue % 15 ===0) {
      console.log("ping-pong");
      $("#result").append("Ping Pong!<br>");
    } else if (inputValue % 3 === 0) {
      console.log("ping");
      $("#result").append("Ping!<br>");
    } else if (inputValue % 5 === 0) {
      console.log("pong");
      $("#result").append("Pong!<br>");
    } else {
      console.log("Please try again");
      $("#result").append("Guess again!<br>");
    }
    $("#results-div").show();



    //Clear the input field
    let inputArea = document.getElementById("number-input");
    inputArea.value = "";
    //Prevent the form from attempting to send data to a server
    event.preventDefault();
  });

  $("#button-reload").click(function() {
    location.reload();
  });

});