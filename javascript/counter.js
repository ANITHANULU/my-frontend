let count=0;
let mypara=document.getElementsByTagName("p")[0];
function increment(){
    if(count>=0 && count<20){ 
    count++;}else{
        alert("exceeding")
    }
    mypara.textContent=count;
}
function decrement(){
    if(count>0 && count<20){
    count--;}else{
        alert("succeeding")
    }
    mypara.textContent=count;
}
function reset(){
    count=0;
    mypara.textContent=count;
}


// function myfun(myvalue) {
//     if (myvalue === 'increment') {
//         count++;
//     } else if (myvalue === 'decrement') {
//         count--;
//     } else {
//         count = 0;
//     }
//     mypara.textContent = count;
// }
