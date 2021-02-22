var show = document.getElementById("nav-links");
    function showMenu() {
        show.style.right ="0";
    }
    function closeMenu() {
        show.style.right ="-120px";
    }

var avatar = document.getElementById("avatar");
var profile = document.getElementById("profile");
    profile.onclick = function (){
        if (profile.style.display = "block") {
            profile.style.display = "none";
        }
    }
    avatar.onclick = function (){
        if (profile.style.display = "none") {
            profile.style.display = "block";
        }
    }
    

var circle = document.getElementById("circle");
var name = document.getElementById("name");  var next = document.getElementById("next");
var back = document.getElementById("back");

var rotateValue = "rotate(0deg)";
var rotateSum;

    next.onclick = function()
    {
        rotateSum = rotateValue + "rotate(-60deg)";
        main.style.transform = rotateSum;
        rotateValue = rotateSum;
    }

    back.onclick = function()
    {
        rotateSum = rotateValue + "rotate(+60deg)";
        main.style.transform = rotateSum;
        rotateValue = rotateSum;
    }

