const para = document.createElement("p");
para.textContent = "Hey, I'm Red!";
para.style.color = ("red");
const theDiv = document.getElementById("div1");
theDiv.appendChild(para);

const head3 = document.createElement("h3");
head3.textContent = "I'm a blue h3!";
theDiv.appendChild(head3);

const btn = document.createElement("button");
btn.innerHTML = "Hello Button";

console.log("Red Text");

