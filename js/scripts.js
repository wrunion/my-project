//Business Logic

//UI Logic
$(document).ready(function() {
  //console.log('jquery is working');
  $("form#number-form").submit(function(event) {
    //console.log('form has submitted');
    let inputValue = $("#number-input").val();
    console.log(inputValue);

    //Clear the input field
    let inputArea = document.getElementById("number-input");
    inputArea.value = "";
    //Prevent the form from attempting to send data to a server
    event.preventDefault();
  });

});