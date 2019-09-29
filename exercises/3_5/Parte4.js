var personName = "";
var btn=document.getElementsByTagName('button');

btn[1].addEventListener('click', function (){complainMessage()});
btn[0].addEventListener('click', function (){goDark()});
btn[2].addEventListener('click', function (){finishTheStory()});

var nome=document.querySelector('#name');
nome.addEventListener('input',function (){typeAndScream()})



function complainMessage() {
  alert("I told you not to do that " + personName);
}

function typeAndScream() {
  document.getElementById("audio").play();
  personName = document.getElementById("name").value;
}

function goDark() {
  var body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark";
  }
  else {
    body.className = "";
  }
  
}

function finishTheStory() {
  document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
}