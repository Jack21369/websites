function surprise() {
    const surprises = ["Have a good day!", "Surprise! :D", "Boo!", "Ooga Booga"];
    randomIndex = Math.floor(Math.random() * (4 - 1) + 1);
    alert(surprises[randomIndex]);
}

function copyLink() {
    pageLink = document.getElementById("copy-link");
    navigator.clipboard.writeText(pageLink.value);
    document.getElementById("copy-tooltip").innerHTML = "Copied!";
}

function resetToolTip() {
    document.getElementById("copy-tooltip").innerHTML = "";
}