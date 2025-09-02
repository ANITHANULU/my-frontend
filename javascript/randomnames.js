function fun(){
    let array=["Anitha","Radha","Thanusha"];
    let names="";
    for(let i=0;i<3;i++){
        let name=Math.floor(Math.random()*array.length);
        names=array[name];
    }
    document.getElementById("names").innerHTML="generate names:"+names;
}


