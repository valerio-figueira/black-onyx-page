const mobile = document.getElementsByClassName("mobile")[0];

mobile.addEventListener('click', showNav);

function showNav(){
    const nav = document.querySelector(".navbar");
    const home = document.querySelector("#home");
    const dropdown = document.querySelector(".dropdown");

    if(nav.className === "navbar"){
        nav.className += " responsive";
        mobile.className += " active";
        home.style.marginTop = "33.8px";
        dropdown.className += " hidden";
    } else{
        nav.className = "navbar";
        mobile.className = "mobile";
        dropdown.className = "dropdown";
    }
}

//CLOCK IN HEADER


function updateTime(){
    const clockTag = document.querySelector("#clock");
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();

    if(min < 10){
        if(sec < 10){
            clockTag.innerHTML = `${hour}:0${min}:0${sec}`;
        } else{
            clockTag.innerHTML = `${hour}:0${min}:${sec}`;
        }        
    } else{
        if(sec < 10){
            clockTag.innerHTML = `${hour}:${min}:0${sec}`;
        } else{
            clockTag.innerHTML = `${hour}:${min}:${sec}`;
        }
    }
    
    clockTag.style.display = "inline";
    clockTag.style.float = "right";
    clockTag.style.marginRight = "15px";
}

setInterval(updateTime, 0);


//LINK IN WEBSITE TITLE
const title = document.querySelector("#title");
title.style.cursor = "pointer";
title.addEventListener("click", function(){
    window.open("./index.html", "_self");
})

//LINK IN ARTICLES
const articles = document.querySelectorAll("article");
for(let article of articles){
    article.style.cursor = "pointer";
    article.addEventListener('click', link);
}

function link(){
    window.open("./index.html", "_self");
}

const year = new Date().getFullYear();
const copyright = document.querySelector("#copyright");
copyright.innerHTML += ` ${year} All rights reserved - Black Onyx`;