
//Sound by clicking on button
for(var i=0;i<document.querySelectorAll("button").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){;
  var buttonInnerHTML=this.innerHTML;
  myFunction( buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
});
}


//Sound by pressing key on keyboard
document.addEventListener("keydown",function(event){
 myFunction(event.key);
 buttonAnimation(event.key);
});


//Function which detects which key is pressed or which button is clicked
function myFunction(key){
  switch (key) {
    case "t":
    case "T":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;
    case "u":
    case "U":
      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "m":
    case "M":
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "h":
    case "H":
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "o":
    case "O":
      var snare=new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "n":
    case "N":
      var crash=new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "e":
    case "E":
      var kick=new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:console.log("key");

  }
}

function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
