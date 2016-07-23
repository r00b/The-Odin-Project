$(document).ready(function() {

  // sets up default board canvas
  function initialSetup() {
    for (var i = 0; i < 625; i++) {
      $("#board").append('<div class="square"></div>');
    }
    $(".square").height(21);
    $(".square").width(21);
  }
  initialSetup();

  // alternatively draws and erases divs on hover
  function drawSketch() {
    $(".square").mouseenter(function() {
      var curr = $(this).css("background-color");
      if (curr === "rgb(0, 0, 0)") {  // check if the square has been drawn
        $(this).css("background-color","white");
      } else {
        $(this).css("background-color","black");
      }
    });
  }
  drawSketch();

  // rests all squares to empty cavnas
  function clearBoard() {
    $(".square").css("background-color","white");
  }

  // creates a new board with user-specified dimensions
  function newBoard() {
    $(".square").remove();
    var numSquares = dimensions();  // get dimensions
    for (var i = 0; i < numSquares; i++) {
      $("#board").append('<div class="square"></div>'); // place each div
    }
    var squareDim = 525 / Math.sqrt(numSquares);  // calculate dimension of divs
    $(".square").height(squareDim);
    $(".square").width(squareDim);
  }

  // get the dimensions from the user
  function dimensions() {
    var max = 50; // program becomes too slow above a 50x50 board
    while (!res <= max) {
      var res = prompt("Enter how many squares per side should be drawn. The entry must be between 1 and 50.");
      if (res <= max) {
        return res * res; // return total number of squares in canvas
      }
      else {
        alert("Enter a number between 1 and 50.");
      }
    }
  }

  // draw squares with random colors
  function drawColorfulSketch() {
    $(".square").mouseenter(function() {
      var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
      (Math.floor(Math.random() * 256)) + ',' +
      (Math.floor(Math.random() * 256)) + ')';
      $(this).css("background-color",color);
    });
  }

  // draw squares that fade in depending on how many hovers
  function drawFadingSketch() {
    $(".square").mouseenter(function() {
      $(this).css("background-color","black");
      var opacity = $(this).css("opacity");
      if (opacity === "0") {  // reset to a fully opaque square
        $(this).css("opacity",1);
      }
      else if (opacity <= 1) {
        $(this).css("opacity", opacity - 0.1);
      }
    });
  }

  // trigger a new board
  $("#newBoard").click(function() {
    newBoard();
    drawSketch();
  });

  // trigger a colorful board
  $("#newColorful").click(function() {
    newBoard();
    drawColorfulSketch();
  });

  // trigger a fade-in board
  $("#newFading").click(function() {
    newBoard();
    drawFadingSketch();
  });

  // clear board of all modifications
  $("#newClear").click(function() {
    clearBoard();
  });
});
