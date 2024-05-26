// // scripts.js

// document.addEventListener('DOMContentLoaded', function() {
//     const sections = document.querySelectorAll('section');

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, {
//         threshold: 0.1
//     });

//     sections.forEach(section => {
//         observer.observe(section);
//     });
// });

// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
