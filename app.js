// Rover Object Goes Here
// ======================

// ======================
var rover = {
direction: "N",
 x: 0,
 y:0,
 travelLog:[]
}
// Turn the rover to the left
function turnLeft(){
  console.log("turnLeft was called!");
  
  switch(rover.direction) {
    case "N":
      rover.direction = "W";
    break;
    case "W": 
      rover.direction = "S";
    break;
    case "S":
      rover.direction = "E";
    break;
    case "E":
      rover.direction = "N";
    break;
  }
}

// Turn rover to the right
function turnRight(){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
    rover.direction = "E";
    break;
    case "W":
    rover.direction = "N";
    break;
    case "S":
    rover.direction ="W";
    break;
    case "E":
    rover.direction = "S";
    break;
  }
}

// moveFoward rover
function moveForward(){
  console.log("moveForward was called")
  storeCurrentPosition(rover)
  switch(rover.direction) {
    case "N":
    if (rover.y > 0) {
      rover.y = rover.y-1;
    }
    
    break;
    case "W":
    if (rover.x > 0){
      rover.x = rover.x-1;
    }
    
    break;
    case "S":
    if (rover.y < 9){
      rover.y = rover.y+1;
    }
    
    break;
    case "E":
    if (rover.x<9){
      rover.x = rover.x +1;
    }
    break;

  }
}
 function executeCommands (commands) {
   for (var i=0; i<commands.length; i++){
      switch (commands[i])
      {
        case "f":
        moveForward();
        break;
        case "r":
        turnRight();
        break;
         case "l":
         turnLeft();
         break;
      }
   }
   console.log(rover.travelLog);
 }

 //Store rover currentPosition
function storeCurrentPosition(rover){
  var coordinates = {
    x: rover.x,
    y: rover.y
  };
  rover.travelLog.push(coordinates)

}
