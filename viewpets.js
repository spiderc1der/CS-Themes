// change background color of pet images on Pet group pages

var allPets = document.getElementsByClassName("pet");

for (let i = 0; i < allPets.length; i++){
    var pet = allPets[i];
    var petURL = pet.querySelector("img").src;
    var newURL = petURL.replaceAll("e0f6b2", "ffe3f1");
    pet.querySelector("img").src = newURL;
}

