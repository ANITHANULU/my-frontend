let para1=document.getElementById("quote");
let array=[ "Believe you can and you're halfway there.",
            "The only way to do great work is to love what you do.",
            "Do what you can, with what you have, where you are.",
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "The best way to predict the future is to create it."];
function myfun(){

    let random = Math.floor(Math.random() * array.length);
    para1.textContent = array[random];

 }
 let para2=document.getElementsByTagName("body")[0];
 let para3=document.getElementsByTagName("button")[0];
 para1.style.color = "black";
//  para1.style.border="3px solid rgb(0,0,0,0.6)";
 para1.style.fontSize = "24px";
 para1.style.fontFamily = "cursive";
//  para1.style.backgroundColor = "rgb(0,0,0,0.6)";
 para1.style.borderRadius = "10px";
 para1.style.width="50%";
 para2.style.backgroundColor= "skyblue";
 para3.style.border="3px solid rgb(0,0,0,0.6)";
 para3.style.padding="8px";
 para3.style.fontSize = "20px";
 para3.style.fontFamily= "cursive";
 para3.style.color = "white";
 para3.style.backgroundColor = "black";
 para3.style.borderRadius = "10px";
 para3.style.cursor="pointer";
 para3.style.position="absolute";
 para3.style.top="50%";
 para3.style.left="43%";

 para1.style.position="absolute";
 para1.style.top="30%";
 para1.style.left="38%";
 para1.style.padding="5px";
 para1.style.width="22%";
 
