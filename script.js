// ---- RAIN ANIMATION ----
const canvas = document.getElementById('rain-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drops = [];

for (let i = 0; i < 150; i++) {
    drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
    });
}

function drawRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drops.forEach(drop => {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x - 1, drop.y + drop.length);
        ctx.strokeStyle = `rgba(120, 150, 200, ${drop.opacity})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
            drop.y = -drop.length;
            drop.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(drawRain);
}

drawRain();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ---- CUSTOM CURSOR ----
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// ---- ABOUT TEXT CHUNKS SCROLL REVEAL ----
const chunks = document.querySelectorAll('.about-chunk');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200);
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

chunks.forEach(chunk => observer.observe(chunk));

// ---- GSAP SCRUB ANIMATIONS ----
gsap.registerPlugin(ScrollTrigger);

// Hero fades out as about covers it
gsap.to("#hero", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "top 10%",
        scrub: 1.5,
    },
    opacity: 0,
    ease: "none"
});

gsap.to("#about", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "top 10%",
        scrub: 1.5,
    },
    opacity: 1,
    clipPath: "inset(0 0% 0 0%)",
    ease: "none"
});

// Polaroids scrub animations
gsap.from(".p1", {
    scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top 30%",
        scrub: 1.5,
    },
    x: -300, opacity: 0, rotation: -25
});

gsap.from(".p2", {
    scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top 20%",
        scrub: 2,
    },
    x: -400, opacity: 0, rotation: 20
});

gsap.from(".p3", {
    scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top 10%",
        scrub: 1.8,
    },
    x: -350, opacity: 0, rotation: -15
});

// gsap.from(".about-chunk", {
//     scrollTrigger: {
//         trigger: "#about",
//         start: "top bottom",
//         end: "top 20%",
//         scrub: 1.5,
//     },
//     y: 60, opacity: 0, stagger: 0.1
// });

// gsap.from(".about-heading", {
//     scrollTrigger: {
//         trigger: "#about",
//         start: "top bottom",
//         end: "top 30%",
//         scrub: 1,
//     },
//     y: -50, opacity: 0
// });

gsap.from(".about-chunk", {
    scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top 20%",
        scrub: 1.5,
    },
    x: 300, opacity: 0, stagger: 0.1
});

gsap.from(".about-heading", {
    scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top 30%",
        scrub: 1,
    },
    x: 300, opacity: 0
});

gsap.from(".about-vine", {
    scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top 20%",
        scrub: 1.5,
    },
    x: 150, opacity: 0
});