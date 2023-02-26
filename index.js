//get body
const body = document.getElementById("body");
console.log(body);

//red text p
const para = document.createElement("p"); //create paragraph named "para"
/*para.style.width = "200px"     //styling the p box
para.style.height = "200px"
para.style.backgroundColor = "red";*/
para.style.color = "red"; // coloring text
para.textContent = "Hey, I'm red text"; //textContent
body.appendChild(para);  //insert para in the html body
console.log(para);


//h3 text
const heading3 = document.createElement("h3");
heading3.style.color = "blue";
heading3.textContent = "I'm blue h3!";
body.appendChild(heading3);