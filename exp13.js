

let parent =document.getElementById("cible");

setTimeout(()=>{
    let element= document.createElement("div");

    element.innerHTML = "Bonjour";
    parent.appendChild(element);

}, 5000);

setInterval(()=>{
    let element= document.createElement("div");

    element.innerHTML = "Bonsoir";
    parent.appendChild(element);

}, 7000);