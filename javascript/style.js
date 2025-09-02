let myele=document.getElementById("mypara");
console.log(myele);
myele.style.backgroundColor="skyblue";
myele.style.color="red";
myele.style.fontSize="40px";

let myimg=document.createElement("img");
myimg.src="./earth.jpg";
myimg.alt="earth";
myimg.height=100;
myimg.width=100;
console.log(myimg);

let mybody=document.getElementsByTagName("body");
mybody[0].appendChild(myimg);

let myp=document.getElementById("mypara");
function myfun(){
let newpara=document.createElement("p");
newpara.textContent="hello";
myp.appendChild(newpara);
}