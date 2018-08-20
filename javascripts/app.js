var rover = new Object("direction", "x", "y", "travelLog");
rover.direction = "N";
rover.x = 0;
rover.y = 0;
var inputString;
var travelLog = [];


function turnRover(inputString){
 for(let i = 0; i < inputString.length; i++){
   switch (inputString.charAt(i)){
     case "L":
     turnLeft(rover)
     travelLog.push(rover.x, rover.y)
     break;
     case "R":
     turnRight(rover)
     travelLog.push(rover.x, rover.y)
     break;
     case "F":
     moveForward(rover)
     travelLog.push(rover.x, rover.y)
     break;
   }
 }
}
 
function turnLeft(rover){
  console.log("turnLeft was called!");
    switch (rover.direction) {
    case "N":
        rover.direction = "W"
        break;
    case "W":
        rover.direction = "S"
        break;
    case "S":
        rover.direction = "E"
        break;
    case "E":
        rover.direction = "N"
        break;
    }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
        rover.direction = "E"
        break;
    case "E":
        rover.direction = "S"
        break;
    case "S":
        rover.direction = "W"
        break;
    case "W":
        rover.direction = "N"
        break;
    }
}


function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
        rover.y = rover.y - 1
        break;
    case "E":
        rover.x = rover.x + 1
        break;
    case "S":
        rover.y = rover.y + 1
        break;
    case "W":
        rover.x = rover.x - 1
        break;
    }
}


// turnRight(rover)
// console.log(rover.x, rover.y)
// moveForward(rover)
// console.log(rover.x, rover.y)
// turnRight(rover)
// console.log(rover.x, rover.y)
// moveForward(rover)
// console.log(rover.x, rover.y)
// turnRight(rover)
// console.log(rover.x, rover.y)
// moveForward(rover)
// console.log(rover.x, rover.y)
turnRover('FLRFLRRRRLF')
console.log(rover.direction)
console.log(rover.x,rover.y)
console.log(travelLog)

