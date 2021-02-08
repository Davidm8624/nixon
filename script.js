// function goodJob(){
//     alert("good-man");
// }
// function uSure(){
//     alert("are you sure about that")
// }

//used for test^^

//smash on red button hover
function smashing(event) {
    smash.play();
    this.removeEventListener('mouseenter', smashing);
}
// function vader(event){
//     noo.play();
// }
let redStuff = document.getElementById("voteRed");
redStuff.addEventListener('mouseenter', smashing)
// redStuff.addEventListener('mouseleave', vader)

let smash = new Audio("sound/SRT.mp3")
//anthem on load
let usa = new Audio("sound/Anthem.mp3")

function anthem(event) {
    usa.play();
}

window.addEventListener('load', anthem);

//blue button onclick and leave and right click
let no = new Audio("sound/nooo.mp3")

let blueStuff = document.getElementById("voteBlue");
blueStuff.addEventListener('click', mcGovernClick)
redStuff.addEventListener('mouseleave', strike1)
blueStuff.addEventListener('contextmenu', sneaky)
function mcGovernClick(event) {
    no.play();
    console.log(blueStuff.style.top)
    let randomX = Math.floor(Math.random() * 83);
    let randomY = Math.floor(Math.random() * 422);
    console.log(randomX);
    console.log(randomY);
    voteBlue.style.left = randomX;
    voteBlue.style.top = randomY
    console.log(voteBlue.style.top)
    this.removeEventListener('click', mcGovernClick);
//still stuck, neither you or jaxon know whats wrong with this part ^
}
function strike1(event) {
    alert("you sure you dont wana move back to that button?")
}
function sneaky(event) {
    alert("ya think thats gonna work ya sneaky little -");

    let x = event.clientX;
    let y = event.clientY;
    let coords = ("X coords: " + x + ", Y coords: " + y);
    console.log(coords);
}
let mMove = 0;
window.addEventListener('mousemove', multiply);
function multiply(){
    if(mMove <= 100){
    let clones = document.createElement("button")
    clones.textContent = 'nixon';
    clones.styleHeight = '100px';
    clones.styleWidth = '100px';
    clones.style.backgroundColor = 'red';
    voteRed.appendChild(clones);
    mMove++
    }
}
