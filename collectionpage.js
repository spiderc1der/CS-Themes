// change colors of item & stamp collection tabs

var tabs = document.getElementsByClassName("ui-state-default ui-corner-top");

for (let i = 0; i < tabs.length; i++){
    //tabs[i].setAttribute("style", "border: 1px solid #E0218A;");
    //tabs[i].setAttribute("style", "background: #E0218A url(https://i.imgur.com/PuIcmow.png) 50% 50% repeat-x;");
}

var tabs2 = document.getElementsByClassName("ui-state-default ui-corner-top ui-tabs-active ui-state-active"); 
for (let i = 0; i < tabs.length; i++){
    //tabs2[i].setAttribute("style", "border: 1px solid #FFE3F1;");
    //tabs2[i].setAttribute("style", "background: #FFE3F1 url(https://i.imgur.com/Eb6PPlK.png) 50% 50% repeat-x;");
    tabs2[i].setAttribute("style", "border: 1px solid #FFE3F1");
    tabs2[i].setAttribute("style", "background: #FFE3F1;");
}




/* body.cs .item-category-tabs .subcategory-tabs, body.cs .item-category-tabs .category-body {
    background: #FFE3F1 !important;
}

body.cs .item-category-tabs .subcategory-tabs ul.ui-tabs-nav li.ui-state-active {
    background-color: #99c57c;
}*/