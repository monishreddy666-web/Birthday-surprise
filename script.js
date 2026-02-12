const slides = document.querySelectorAll(".slider img");

let index = 0;

setInterval(() => {

    slides[index].classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");

}, 3500);

function playVideo(){

    document.getElementById("videoContainer").style.display="flex";

    document.getElementById("birthdayVideo").play();

}

function randomFloat(element){

    let randomDuration = Math.random() * 3 + 4;  // 4s to 7s
    let randomDistance = Math.random() * 15 + 8; // 8px to 23px

    element.animate([
        { transform: "translateY(0px)" },
        { transform: `translateY(-${randomDistance}px)` },
        { transform: "translateY(0px)" }
    ], {
        duration: randomDuration * 1000,
        iterations: Infinity,
        easing: "ease-in-out"
    });
}

randomFloat(document.querySelector(".overlay h1"));
randomFloat(document.querySelector(".overlay h2"));
randomFloat(document.querySelector(".overlay p"));

const balloonContainer = document.querySelector(".balloons");

for(let i=0;i<10;i++){
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");

    balloon.style.left = Math.random()*100 + "vw";
    balloon.style.animationDuration = (Math.random()*5+7) + "s";

    balloonContainer.appendChild(balloon);
}
const heartContainer = document.querySelector(".hearts");

for(let i=0; i<20; i++){

    let heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML = "❤";

    // random position
    heart.style.left = Math.random()*100 + "vw";

    // random size
    heart.style.fontSize = (Math.random()*20 + 15) + "px";

    // random speed
    heart.style.animationDuration =
        (Math.random()*5 + 5) + "s";

    heartContainer.appendChild(heart);
}
