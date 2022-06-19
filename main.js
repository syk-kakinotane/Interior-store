'use strict';
const hamburger = document.getElementById("hamburger");
const navi = document.getElementById("naviOpened");

hamburger.addEventListener("click", function (){
    navi.classList.toggle("active"); 
    hamburger.classList.toggle("closeBtn");
})

navi.addEventListener("click", function (){
    navi.classList.toggle("active");
    hamburger.classList.toggle("closeBtn");
})    
