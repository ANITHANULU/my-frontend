let myheader = document.createElement("h2");
myheader.appendChild(document.createTextNode("Fruits"));let mybody = document.getElementsByTagName("body").item(0);
mybody.appendChild(myheader);
let ordered3 = document.createElement("ol");
let ordered = document.createElement("li");
ordered.appendChild(document.createTextNode("Apple"));
let ordered1 = document.createElement("li");
ordered1.appendChild(document.createTextNode("Banana"));
let ordered2 = document.createElement("li");
ordered2.appendChild(document.createTextNode("Orange"));
ordered3.appendChild(ordered);
ordered3.appendChild(ordered1);
ordered3.appendChild(ordered2);
mybody.appendChild(ordered3);

