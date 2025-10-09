function liked(element) {
    const span = element.querySelector("span");
    let like = parseInt(span.innerText);
    like++;
    span.innerText = like;
}

function login(el){
    if(el.innerText == "Login"){
        el.innerText = "Logout";
    } else {
        el.innerText = "Login";
    }
}

function hide(el){
    el.remove();
}