let button = document.createElement("button");
let btnText = document.createTextNode("Click Here");
button.appendChild(btnText);
document.body.appendChild(button);

button.addEventListener("click", function () {
  alert("Welcome to the page!");
});

document.getElementById("container").addEventListener("mouseover", function () {
  document.getElementById("container").style.backgroundColor = "red";
});

document
  .getElementById("container")
  .addEventListener("mouseleave", function () {
    document.getElementById("container").style.backgroundColor = "purple";
  });
let paragraph = document.createElement("p");
let text = document.createTextNode("this is my first paragraph");
paragraph.appendChild(text);
document.body.appendChild(paragraph);

document.getElementById("text").addEventListener("click", Color);

// function changeColor(event) {
//   event.target.style.color = "red";
// return false;
//}
function generateRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Color() {
  let randomColor = generateRandomColor();
  document.getElementById("text").style.color = randomColor;
}
let btn = document.createElement("button");
btn.textContent = "Over Here";
document.body.appendChild(btn);

let div = document.createElement("div");
div.textContent = "";
document.body.appendChild(div);
div.classname = "div-class";

btn.addEventListener("click", function () {
  let span = document.createElement("span");
  span.textContent = "Tre McKendree";
  div.appendChild(span);
});

let newbtn = document.createElement('button');
newbtn.textContent = 'friends';
document.body.appendChild(newbtn);

let UL = document.createElement('ul');
document.body.appendChild(UL);

let friends = ['Robert','Adam','Emily','Anna','Emma','John','Garrett','Haylee','Mark','Jack','Felix'];
let friendCounter = 0;

newbtn.addEventListener('click', function (){
    if (friendCounter < friends.length){
        let LI = document.createElement('li');
        let name = document.createTextNode(friends[friendCounter]);
        UL.appendChild(LI);
        LI.appendChild(name);
        friendCounter++;
    }
})
