let input=document.getElementById("input");
let para=document.getElementById("para");
function diceroll(){
    let myimgtag=document.getElementById("randomimg");
    para.textContent=input.value;
    let myimgarr=[];
for(let i=0;i<input.value;i++){
    let randomNumber = Math.floor((Math.random() * 6) + 1);
    myimgarr.push(`<img src=0${randomNumber}.png alt=${randomNumber} height=50 width=50>`);
}    myimgtag.innerHTML=myimgarr.join("");
}
