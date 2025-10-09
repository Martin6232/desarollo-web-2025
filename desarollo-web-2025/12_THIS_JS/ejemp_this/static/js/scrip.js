function example(element) {
    console.log("elemento clickeado", element);
}

function turnOff(element) {
    
    if (element.innerText == "On"){
        element.innerText = "Off";
    } else {
        element.innerText = "On";
    }
}

function hide(element) {
    element.remove();
}


