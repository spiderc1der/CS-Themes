// change images of lost & found and the Pound
var oldHTML = document.getElementById("page-body").innerHTML;
var newHTML = oldHTML.replaceAll("e0f6b2", "FFE3F1");
document.getElementById("page-body").innerHTML = newHTML;