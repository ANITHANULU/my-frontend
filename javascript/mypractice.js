function myfun() {
    let myarray = ["anitha", "thanusha", "radha"];
    let mydate = document.getElementById("demo");
    let randomIndex = Math.floor(Math.random() * myarray.length); 
    mydate.innerHTML = myarray[randomIndex]; 
}
