// function checkNumber() {
//     let userInput = document.getElementById("userNumber").value;
//     let randomNum = Math.floor(Math.random() * 100) + 1;
    
//     if (userInput == randomNum) {
//         document.getElementById("result").innerHTML = ` Matched! ${randomNum}`;
//     } else {
//         document.getElementById("result").innerHTML = `Try Again! Random number was ${randomNum}`;
//     }
// }


let input=document.getElementById("input");
let para=document.getElementById("para");

function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1; 
    document.getElementById("random-number").textContent = randomNumber;

    if(input===randomNumber){
     para.textContent="This number equals"
    }else{
        para.textContent="This is not equal"
    }
}