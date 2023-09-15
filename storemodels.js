// change background color of store model pets in Store
var oldHTML = document.getElementById("csbody").innerHTML;
var newHTML = oldHTML.replaceAll("e0f6b2", "FFE3F1");

document.getElementById("csbody").innerHTML = newHTML;