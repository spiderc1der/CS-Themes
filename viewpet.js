// change background color of pet images on individual Pet pages

var petURL = document.getElementById("petimg").src;
var newURL = petURL.replaceAll("e0f6b2", "ffe3f1");
document.getElementById("petimg").src = newURL;

