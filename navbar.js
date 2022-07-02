let mobile = document.getElementsByClassName("mobile")[0];

mobile.addEventListener('click', showNav);

function showNav(){
    let nav = document.querySelector(".navbar");
    let home = document.querySelector("#home");
    let dropdown = document.querySelector(".dropdown");

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

