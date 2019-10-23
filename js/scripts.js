$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var upperCase = person1Input.toUpperCase();
    console.log(upperCase)
    $(".person1").text(upperCase);



    $("#story").show();
    $("#hide").hide();

    event.preventDefault();
  });
});
