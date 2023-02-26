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


//create styled firstDiv and append ir to body after adding it's content
const firstDiv = document.createElement("div");
firstDiv.style.backgroundColor = "pink";
//body.appendChild(firstDiv);   



//nested h1 in firstDiv
const nestedH1 = document.createElement("h1");
nestedH1.textContent = "I'm in div"

firstDiv.appendChild(nestedH1) // append h1 in the firstDiv

//nested p in firstDiv
const nestedPara = document.createElement("p");
nestedPara.textContent = "ME TOO!";
firstDiv.appendChild(nestedPara);


//append firstDiv to body
body.appendChild(firstDiv);


/*Button alert */

const btn = document.createElement("button");
btn.textContent = "Click Me!";
firstDiv.appendChild(btn);

//btn.onclick = () =>alert("Hello World")

function alertFunction(){
    alert("Yay, You did it from a function");

}
btn.onclick = alertFunction;



btn.addEventListener('click', function (e) {
    console.log(e);
  });
 // change btn syle.property on click eventListener
  btn.addEventListener('click', function (e) {
    e.target.style.background = 'skyblue';
  });

