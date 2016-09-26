window.onload = function(){
  console.log("js running");
  var button = document.getElementById("button");
  button.addEventListener("click", function(){console.log("clicked!")
  var canvas = document.getElementById("paper"),
  c = canvas.getContext("2d");

  console.log("canvas is ", canvas);
  console.log("c is ", c);
  c.fillStyle = "blue";
  c.fillRect(0, 0, canvas.width, canvas.height)

})


}
