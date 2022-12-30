resumeContents = document.querySelectorAll(".content");
sectNames = document.querySelectorAll(".sect-name");



const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    }
    );
});

resumeContents.forEach(content => {
    appearOnScroll.observe(content);
});

sectNames.forEach(sectionName => {
    appearOnScroll.observe(sectionName);
});