function hover1(element) {
    let img = element.querySelector('img');
    let span = element.querySelector('span');
    img.remove();
    span.remove();
    document.getElementById('cont').innerHTML = '<video width="150" autoplay src="resources/videos/PREMEDITATED (Full Combo) - FNF Myths of Yamaha.mp4"></video>';
}

function out1(element) {
    let img = element.querySelector('img');
    img.appendchild = '<img src="resources/img/ZWzXbVEC8fU_1280x720.jpg" class="vid-s" id="video">';
}