var count = 0
var number;

function incrementCounter() {
  count++;
  $("#count").text(count);
};

function checkGuess() {
  var diff;
  var guessInt = parseInt(guess)

  if (guess == number) {
    $('#feedback').text("Correct!");
  } else if (guessInt > number) {
    diff = guessInt - number;
  } else if (guessInt < number) {
    diff = number - guessInt;
  }

  if (diff >= 1 && diff <= 10) {
    $('#feedback').text("Very hot!");
  } else if (diff < 10 & diff <= 20) {
    $('#feedback').text("Warmer");
  } else if (diff < 20 && diff <= 30) {
    $('#feedback').text("Warm");
  } else if (diff < 30 && diff <= 40) {
    $('#feedback').text("Cold");
  } else if (diff < 40 && diff <= 60) {
    $('#feedback').text("Ice Cold");
  } else if (diff < 60 && diff <= 80) {
    $('#feedback').text("not even close");
  }

};

function generateNumber() {
  number = Math.floor((Math.random() * 100) + 1);
};

$(document).ready(function() {

  generateNumber();
  console.log(number)

  /*--- Display information modal box ---*/
  $(".what").click(function() {
    $(".overlay").fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function() {
    $(".overlay").fadeOut(1000);
  });

  $("#guessButton").on('click', function(e) {
    e.preventDefault();
    var guess = $("#userGuess").val();
    var guessL = '<li>' + guess + '</li>';
    $('#guessList').append(guessL);
    $('#userGuess').val('');
    incrementCounter();
    checkGuess(guess);


  });

  $('.new').on('click', function() {
    window.location.reload(true);
  });


});
