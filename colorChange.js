const greenBt = document.getElementById("btnradio1");
const pinkBt = document.getElementById("btnradio2");
const redBt = document.getElementById("btnradio3");
const blueBt = document.getElementById("btnradio4");



greenBt.addEventListener("click", function onClick(event) {
    document.body.style.backgroundColor = 'green';
}) 
  

pinkBt.addEventListener("click", function onClick(event) {
    document.body.style.backgroundColor = 'pink';
}) 

redBt.addEventListener("click", function onClick(event) {
    document.body.style.backgroundColor = 'red';
}) 

blueBt.addEventListener("click", function onClick(event) {
    document.body.style.backgroundColor = 'blue';
}) 