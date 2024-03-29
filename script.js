import Posts from "./Posts.js";

const mobile = document.getElementsByClassName("mobile")[0];

mobile.addEventListener('click', showNav);

function showNav(){
    const nav = document.querySelector(".navbar");
    const home = document.querySelector("#home");
    const dropdown = document.querySelector(".dropdown");

    if(nav.className === "navbar"){
        nav.className += " responsive";
        mobile.className += " active";
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

    if(hour < 10){
        if(min < 10){
            if(sec < 10){
                clockTag.innerHTML = `0${hour}:0${min}:0${sec}`;
            } else{
                clockTag.innerHTML = `0${hour}:0${min}:${sec}`;
            }
        } else{
            if(sec < 10){
                clockTag.innerHTML = `0${hour}:${min}:0${sec}`;
            } else{
                clockTag.innerHTML = `0${hour}:${min}:${sec}`;
            }            
        }
    } else{
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

//LINK IN ARTICLES & ZOOM
const articles = document.querySelectorAll("article");
for(let article of articles){
    article.style.cursor = "pointer";
    article.addEventListener('click', link);
    article.addEventListener("pointerover", function(){
        article.style.transition = "0.5s";
        article.style.scale = "1.05";
        article.style.margin = "1.5rem 0 2.5rem 0";
    });
    article.addEventListener("pointerleave", function(){
        article.style.transition = "0.5s";
        article.style.scale = "1.0";
        article.style.margin = "20px 10px 20px 10px";
    });
}

function link(){
    window.open("./index.html", "_self");
}

const year = new Date().getFullYear();
const copyright = document.querySelector("#copyright");
copyright.innerHTML += ` ${year} All rights reserved - Black Onyx`;

setPosts();
function setPosts(){
    const firstColumn = document.querySelector(".firstColumn");
    const secondColumn = document.querySelector(".secondColumn");
    const thirdColumn = document.querySelector(".thirdColumn");

    firstColumn.innerHTML = getPosts(0, 2);
    secondColumn.innerHTML = getPosts(2, 5);
    thirdColumn.innerHTML = getPosts(5, 7);
};

function getPosts(start, end){
    return Posts.getHtml().slice(start, end).map(post => {
        return `
            <article class="post">
                <h1>${post.title}</h1>
                    <img src="${post.img}" alt="${post.title}">
                    <p>${post.text}</p>
                <aside>${post.author}</aside>
            </article>
        `;
    }).join('');
}