
let projects = document.querySelector(".projects");
let proj = document.querySelectorAll(".proj");
let clones = [];
let noScroll = false;
let scrollheight = 0;
let scrollPos = 0;
let cloneHeight = 0;


function getScrollPos() {
    return projects.scrollTop; // How much window is scrolled
}

function setScrollPos(pos) {
    projects.scrollTop = pos;
}

function getClonesHeight() {
    cloneHeight = 0;
    clones.forEach(clone => {
        cloneHeight += clone.offsetHeight; //Return height of elements
    });
    return cloneHeight;
}

//Recalculate dimensions when screen resized
function reCalc() {
    scrollPos = getScrollPos();
    scrollheight = projects.scrollHeight; //Height of projects 
    cloneHeight = getClonesHeight();
    if (scrollPos <= 0) {
        setScrollPos(1); // Initial set to 1px to enable upward scrolling
    }
}

function scrollUpdate() {
    if (!noScroll) {
        scrollPos = getScrollPos();
        cloneHeight = getClonesHeight();
        if ((scrollPos + cloneHeight) >= projects.scrollHeight) {
            //scroll back to top when reach bottom
            setScrollPos(1);
            noScroll = true;
        } else if (scrollPos <= 0) {
            //scroll to bottom when reach top
            setScrollPos(scrollheight - cloneHeight);
            noScroll = true;
        }

    }
    if (noScroll) {
        //disable scroll jumping to avoid flickering
        window.setTimeout(() => { noScroll = false }, 40);
    }
}

function onLoad() {
    proj.forEach(item => {
        const clone = item.cloneNode(true);
        projects.appendChild(clone);
        clone.classList.add('.js-clone');
    });
    clones = projects.querySelectorAll('.js-clone');
    reCalc();
    projects.addEventListener('scroll', () => {
        window.requestAnimationFrame(scrollUpdate);
    }, false);
    window.addEventListener('resize', () => {
        window.requestAnimationFrame(reCalc);
    }, false)
}

window.onload = onLoad();


