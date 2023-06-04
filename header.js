let container = document.getElementById("container");
let containerContent = document.createElement("div");
containerContent.classList.add("content");

let icon =document.createElement("div");
icon.innerHTML = "&#8801";
icon.classList.add("icons");
containerContent.appendChild(icon);

let title =document.createElement("div");
title.classList.add("name");
title.innerText = "KinglaoTech";
containerContent.appendChild(title);

let image = document.createElement("img");
image.src = "C:/Users/MARTIAL/Desktop/My website/images/Thom.png";
image.classList.add("pic");
containerContent.appendChild(image);

container.appendChild(containerContent);


let links = document.createElement("div")
links.classList.add("link");
links.id ="link";

let link1 = document.createElement("a");
link1.classList.add("link1");
link1.href = "#";
link1.innerHTML = "GALLERY"
links.appendChild(link1);


let link2 = document.createElement("a");
link2.href = "page.html";
link2.innerHTML = "ABOUT"
links.appendChild(link2);


let link3 = document.createElement("a");
link3.href = "page2.html";
link3.innerHTML = "SERVICES"
links.appendChild(link3);


let link4 = document.createElement("a");
link4.href = "#";
link4.innerHTML = "CONTACT US"
links.appendChild(link4);


let link5 = document.createElement("a");
link5.href = "#";
link5.innerHTML = "RESUME"
links.appendChild(link5);
container.appendChild(links)

icon.addEventListener("click", ()=> {
    document.getElementById("link").style.display="block";
})

window.addEventListener("mouseup", function(event){
    if (!links.contains(event.target)){
        links.style.display="none";
    }
})

