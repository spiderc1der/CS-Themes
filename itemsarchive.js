var boxes = document.getElementsByClassName("giveaway-box");

for (let i = 0; i < boxes.length; i++){
    var boxURL = boxes[i].querySelector("img").src;
    var newURL = boxURL.replaceAll("e0f6b2", "ffcbe6");
    boxes[i].querySelector("img").src = newURL;
}