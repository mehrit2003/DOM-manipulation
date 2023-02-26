//get the body 
const body = document.getElementById("body");




const para = document.createElement("p");
para.textContent = "Hey, I'm Red!";
para.style.color = ("red");
const div1 = document.getElementById("div1");
div1.appendChild(para);

const head3 = document.createElement("h3");
head3.color = "blue"
head3.textContent = "I'm a blue h3!"; //textContent

head3.style.color = "blue"; //Styling color

//////////////////////////////////

const div2 = document.createElement("div");
div2.style.borderColor = "black";
div2.style.backgroundColor = "pink";
div2.style.color = "green";
div2.style.height = 500



div1.appendChild(para);


body.appendChild(head3); //appendChild in Parent

console.log(body);

