window.onload = function(){
  console.log("js running");
  var button = document.getElementById("button");
  button.addEventListener("click", function(){console.log("clicked!")
  var canvas = document.getElementById("paper"),
  c = canvas.getContext("2d");

  console.log("canvas is ", canvas);
  console.log("c is ", c);
  c.fillStyle = "red";
  c.fillRect(0, 0, canvas.width, canvas.height);

  c.fillStyle= "blue";
  c.fillRect(20,20,360, 360);

  c.strokeStyle = "pink";
  c.lineWidth = 10;

  c.beginPath();
  c.moveTo(50, 100);
  c.lineTo(50, 200);
  c.lineTo(50, 150);
  c.lineTo(100, 150);
  c.lineTo(100, 100);
  c.lineTo(100, 200);
  c.stroke();

  c.strokeStyle = "yellow";
  c.lineWidth = 10;

  c.beginPath();
  c.moveTo(125, 105);
  c.lineTo(175, 105);
  c.lineTo(150, 105);
  c.lineTo(150, 195);
  c.lineTo(125, 195);
  c.lineTo(175, 195);
  // c.closePath();
  // c.fill();
  c.stroke();

  c.fillStyle = "white";
  c.font = "30px Helvetica";
  c.fillText("Test font", 250,80);

  c.fillStyle = "orange";
  c.strokeStyle = "red";
  c.beginPath();
  c.arc(100, 300, 50, 0, Math.PI, false);
  // c.stroke();
  c.fill();


})


}
