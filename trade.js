// change background color of pets in any Trade page

var pets = document.querySelectorAll(".pet");
for (let i = 0; i < pets.length; i++) {
    var petURL = pets[i].querySelector("img").src;
    var newURL = petURL.replaceAll("e0f6b2", "FFE3F1");
    pets[i].querySelector("img").src = newURL;
}
