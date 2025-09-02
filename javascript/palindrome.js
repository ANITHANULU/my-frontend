let n=7;
let t=0;
for(i=1;i<=10;i++){
    console.log(n*i);
}
//swapping of variables
let a=10;
let b=20;
console.log("a="+a,"b="+b);
a=a+b;
b=a-b;
a=a-b;
console.log("a="+a,"b="+b);
//largest Array
let marks=[10,20,30,40,50];
let largest=marks[0];
for(i=1;i<marks.length;i++){
    if(marks[i]>largest){
        largest=marks[i];
    }
}
console.log(largest);