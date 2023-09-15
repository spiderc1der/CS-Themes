// change background color of all pet images in the Pet archive
var pets = document.querySelectorAll(".parent");
for (let i = 0; i < pets.length; i++){
    var petURL = pets[i].querySelector("img").src;
    var newURL = petURL.replaceAll("99c57c", "FFCBE6");
    pets[i].querySelector("img").src = newURL;
}

