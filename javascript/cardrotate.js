// document.addEventListener("DOMContentLoaded", function () {
//     let cards = document.querySelectorAll(".container div div");  
//     document.querySelector("button[onclick='left()']").addEventListener("click", function () {
//         flipRandomCard(-180); 
//     });
//     document.querySelector("button[onclick='Right()']").addEventListener("click", function () {
//         flipRandomCard(180);
//     });
//     function flipRandomCard(rotation) {
//         let randomIndex = Math.floor(Math.random() * cards.length);
//         let card = cards[randomIndex];
//         card.style.transition = "transform 0.5s";
//         let currentRotation = card.style.transform.match(/-?\d+/);
//         let newRotation = (currentRotation ? parseInt(currentRotation[0]) : 0) + rotation;
//         card.style.transform = `rotateY(${newRotation}deg)`;
//     }
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const cards = document.querySelectorAll(".card1, .card2, .card3, .card4, .card5, .card6");
//     const leftButton = document.getElementById("left-btn");
//     const rightButton = document.getElementById("right-btn");

//     function getRandomRotation() {
//         return Math.floor(Math.random() * 360) + 1; // Random angle between 1 and 360
//     }

//     function getRandomCard() {
//         const randomIndex = Math.floor(Math.random() * cards.length);
//         return cards[randomIndex];
//     }

//     function rotateCard(direction) {
//         let card = getRandomCard();
//         let randomAngle = getRandomRotation();
//         let currentRotation = card.style.transform.match(/rotate\(([-0-9]+)deg\)/);
//         let currentAngle = currentRotation ? parseInt(currentRotation[1]) : 0;

//         if (direction === "right") {
//             card.style.transform = `rotate(${currentAngle + randomAngle}deg)`;
//         } else {
//             card.style.transform = `rotate(${currentAngle - randomAngle}deg)`;
//         }
//     }

//     rightButton.addEventListener("click", function () {
//         rotateCard("right");
//     });

//     leftButton.addEventListener("click", function () {
//         rotateCard("left");
//     });
// });




let images = document.getElementsByTagName("img");

function left(){
    let ranNum = Math.floor((Math.random() * 6) + 1);
    let deg = images[ranNum];    
    console.log(deg);
    deg.style.transform = 'rotate(-360deg)';
    deg.style.transitionDuration = '2s';
}

function right(){
    let ranNum = Math.floor((Math.random() * 6) + 1);
    let deg = images[ranNum];
    console.log(deg);    
    deg.style.transform = 'rotate(360deg)';
    deg.style.transitionDuration = '2s';
}