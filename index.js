//red text p
const para = document.createElement("p"); //create paragraph named "para"
/*para.style.width = "200px"     //styling the p box
para.style.height = "200px"
para.style.backgroundColor = "red";*/
para.style.color = "red"; // coloring text
para.textContent = "Hey, I'm red text"; //textContent
document.body.appendChild(para);  //insert para in the html body
console.log(para);