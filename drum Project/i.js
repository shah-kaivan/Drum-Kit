var s1 = document.getElementById("s1");
s1.addEventListener("click", play1);

function play1(e){
    e.preventDefault();
    let audio = new Audio("day1_sounds_boom.wav");
    audio.play();
}

var s2 = document.getElementById("s2");
s2.addEventListener("click", play2);

function play2(e){
    e.preventDefault();
    let audio = new Audio("day1_sounds_clap.wav");
    audio.play();
}

var s3 = document.getElementById("s3");
s3.addEventListener("click", play3);

function play3(e){
    e.preventDefault();
    let audio = new Audio("day1_sounds_hihat.wav");
    audio.play();
}

var s4 = document.getElementById("s4");
s4.addEventListener("click", play4);

function play4(e){
    e.preventDefault();
    let audio = new Audio("day1_sounds_tink.wav");
    audio.play();
}

var s5 = document.getElementById("s5");
s5.addEventListener("click", play5);

function play5(e){
    e.preventDefault();
    let audio = new Audio("day1_sounds_snare.wav");
    audio.play();
}
