
function displayGif(id) {
    document.getElementById("gif").src = "backgrounds/" + id + ".gif";
    document.getElementById("gif-container").style.border = "5px solid white";
    document.getElementById("gif-container").style.animation = "left-to-right 1s forwards";
    document.getElementById("gif-container").style.transform = "translateX(-100vh)";
    document.getElementById("arrow-container").style.opacity = "0";
}

function resetGif() {
    document.getElementById("gif").src = "";
    document.getElementById("gif-container").style.border = "";
    document.getElementById("gif-container").style.animation = "";
    document.getElementById("gif-container").style.transform = "";
    document.getElementById("arrow-container").style.opacity = "1";
}