
var keylength= document.querySelectorAll(".drum").length;
for (var i=0; i<keylength; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var whichkey= this.innerHTML;

    sound(whichkey);
    animation(whichkey);
});

}


document.addEventListener("keydown", function(event){
  sound(event.key);
  animation(event.key);
});



function sound(key){

  switch (key) {
      case "w":
      var tom1 = new Audio('https://raw.githubusercontent.com/212mr/m15final/master/music/lute04.mp3');
      tom1.play();
      break;

      case "a":
      var tom2 = new Audio('https://raw.githubusercontent.com/212mr/m15final/master/music/lute01.mp3');
      tom2.play();
      break;

      case "s":
      var tom3= new Audio('https://raw.githubusercontent.com/212mr/m15final/master/music/lute02.mp3');
      tom3.play();
      break;

      case "d":
      var tom4 = new Audio('https://raw.githubusercontent.com/212mr/m15final/master/music/lute03.mp3');
      tom4.play();
      break;

      case "j":
      var crash = new Audio('https://raw.githubusercontent.com/212mr/m15final/master/music/lute02.mp3');
      crash.play();
      break;

      case "k":
      var kickbass = new Audio('https://raw.githubusercontent.com/212mr/m15final/master/music/lute04.mp3');
      kickbass.play();
      break;

      case "l":
      var snare = new Audio('https://raw.githubusercontent.com/212mr/m15final/master/music/lute05.mp3');
      snare.play();
      break;

      default: console.log(whichbutton);

  }

}

function animation(presentkey){
  document.querySelector("."+ presentkey).classList.add("pressed");
  setTimeout(function(){
  document.querySelector("."+ presentkey).classList.remove("pressed");
  });
}
