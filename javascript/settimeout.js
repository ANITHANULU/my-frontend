// let mytime="4000";
// setTimeout(() => {
//     console.log("testing");
// }, mytime);

// function myfun() {
//     console.log("this is aditya university");
//  }
//  let mytime="2000";
//  setTimeout(() => {
//     myfun();
//      console.log("testing");
//  }, mytime);
 

// function myfun() {
//      console.log("this is aditya university");
//  }
//  let mycount=1
//  let myinterval=setInterval(()=>{
//      console.log("mycount:"+mycount);
//      mycount++;
//      myfun();
//      if(mycount>7){
//         clearInterval(myinterval);
//      }
//  },4000);


let mycount=1
let myinterval= setInterval (() => {
    console.log("mycount:"+mycount);
    mycount++;
    if(mycount>5){
        clearInterval(myinterval);
    }
});