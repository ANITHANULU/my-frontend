let myone = document.getElementById("one");
function createtable(){
    let value = document.getElementById("class").value;
    let table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    for(i=0;i<value;i++){
        let row = document.createElement("tr");
        for(j=0;j<value;j++){
            let data = document.createElement("td");
            data.addEventListener("click", function(){
                data.style.backgroundColor = getRandomColor();
            });
            data.setAttribute("class","red")
            data.style.width = "300px"
            data.style.border = "2px solid black";
            data.style.padding = "5px";
            row.appendChild(data);
        }
        table.appendChild(row);
    }
    let myone = document.getElementById("one");
    myone.innerHTML = "";
    myone.appendChild(table);
}
function getRandomColor(){
    let a = "0123456789ABCDEF";
    let color = "#";
    for(i=0;i<6;i++){
        color += a[Math.floor(Math.random()*16)];
    }
   return color;

}