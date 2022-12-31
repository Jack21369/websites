
function displayBar() {
    document.getElementById("nav-bar").style.visibility = "visible";
    document.getElementById("nav-bar").style.animation = "left-to-right 1s forwards";
    document.getElementById("nav-bar").style.transform = "translateX(-100vh)";
    document.getElementById("line-decoration").style.animation = "expand-width 1s forwards";
    document.getElementById("line-decoration").style.borderTop = "white solid 2px";
    document.getElementById("line-decoration").style.borderBottom = "white solid 2px";
    document.getElementById("line-decoration").style.zIndex = "1";
    document.getElementById("arrow-container").style.opacity = "0";
}

function hideBar() {
    document.getElementById("nav-bar").style.visibility = "hidden";
    document.getElementById("nav-bar").style.animation = "";
    document.getElementById("nav-bar").style.transform = "";
    document.getElementById("line-decoration").style.animation = "";
    document.getElementById("line-decoration").style.borderTop = "";
    document.getElementById("line-decoration").style.borderBottom = "";
    document.getElementById("line-decoration").style.zIndex = "";
    document.getElementById("arrow-container").style.opacity = "1";
}