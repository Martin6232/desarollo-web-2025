let cont  = 9
let cont2  = 12
let cont3  = 9

function like(){
    let likes = `${cont} Like(s)`
    document.getElementById("like-count").innerText = likes
    cont++
}

function like2() {
    let likes = `${cont2} Like(s)`
    document.getElementById("like-count2").innerText = likes
    cont2++
}

function like3() {
    let likes = `${cont3} Likes(s)`
    document.getElementById("like-count3").innerText = likes
    cont3++
}