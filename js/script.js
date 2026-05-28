/* =====================================
   LOADER
===================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});

/* =====================================
   TYPING ANIMATION
===================================== */

const typed = new Typed("#typed", {

    strings: [
        "Creative Developer",
        "Video Editor",
        "Visual Storyteller",
        "UI/UX Enthusiast",
        "Photographer",
        "Videographer"
    ],

    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true

});

/* =====================================
   MOBILE MENU
===================================== */

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* =====================================
   CLOSE MENU ON LINK CLICK
===================================== */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

/* =====================================
   DARK LIGHT MODE
===================================== */

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle(
        "light-theme"
    );

    const icon =
        themeToggle.querySelector("i");

    if (
        document.body.classList.contains(
            "light-theme"
        )
    ) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

/* =====================================
   CUSTOM CURSOR
===================================== */

const cursor =
    document.querySelector(".cursor");

const cursorBlur =
    document.querySelector(".cursor-blur");

document.addEventListener(
    "mousemove",
    (e) => {

        cursor.style.left =
            e.clientX + "px";

        cursor.style.top =
            e.clientY + "px";

        cursorBlur.style.left =
            e.clientX + "px";

        cursorBlur.style.top =
            e.clientY + "px";

    }
);

/* =====================================
   CURSOR HOVER EFFECT
===================================== */

const hoverElements =
    document.querySelectorAll(
        "a, button, .project-card, .skill-card, .service-card"
    );

hoverElements.forEach(el => {

    el.addEventListener("mouseenter", () => {

        cursor.style.transform =
            "translate(-50%, -50%) scale(2)";

    });

    el.addEventListener("mouseleave", () => {

        cursor.style.transform =
            "translate(-50%, -50%) scale(1)";

    });

});

/* =====================================
   SCROLL REVEAL
===================================== */

ScrollReveal().reveal(

    ".section-header",

    {
        distance: "50px",
        duration: 1000,
        origin: "bottom",
        reset: false
    }

);

ScrollReveal().reveal(

    ".skill-card, .service-card, .project-card, .showcase-card, .stat-card",

    {
        distance: "40px",
        duration: 1000,
        interval: 100,
        reset: false
    }

);

ScrollReveal().reveal(

    ".about-content, .about-image",

    {
        distance: "60px",
        duration: 1200,
        interval: 200
    }

);

/* =====================================
   ACTIVE NAV LINK
===================================== */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.clientHeight;

        if (

            pageYOffset >=
            sectionTop - 200

        ) {

            current =
                section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (

            link.getAttribute("href")
            .includes(current)

        ) {

            link.classList.add("active");

        }

    });

});

/* =====================================
   PROJECT FILTER BUTTONS
===================================== */

const filterButtons =
    document.querySelectorAll(
        ".project-filters button"
    );

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});

/* =====================================
   PARALLAX HERO IMAGE
===================================== */

window.addEventListener("mousemove",

    (e) => {

        const card =
            document.querySelector(
                ".profile-card"
            );

        const x =
            (window.innerWidth / 2 - e.pageX)
            / 40;

        const y =
            (window.innerHeight / 2 - e.pageY)
            / 40;

        card.style.transform =
            `rotateY(${x}deg) rotateX(${y}deg)`;

    }

);

/* =====================================
   RESET PARALLAX
===================================== */

window.addEventListener("mouseleave",

    () => {

        const card =
            document.querySelector(
                ".profile-card"
            );

        card.style.transform =
            "rotateY(0deg) rotateX(0deg)";

    }

);

/* =====================================
   PARTICLES
===================================== */

tsParticles.load("particles-js", {

    particles: {

        number: {

            value: 60

        },

        color: {

            value: "#00f5ff"

        },

        links: {

            enable: true,

            color: "#00f5ff",

            opacity: 0.15

        },

        move: {

            enable: true,

            speed: 1

        },

        opacity: {

            value: 0.3

        },

        size: {

            value: 2

        }

    },

    background: {

        color: "transparent"

    }

});


/* =====================================
   EMAILJS CONTACT FORM
===================================== */

emailjs.init("b5VXB8beF5bf4R2be");

const contactForm =
document.getElementById(
    "contact-form"
);

if(contactForm){

    contactForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            emailjs.send(

                "service_y08e7ev",

                "template_am04ikc",

                {

                    from_name:
                    document.getElementById("name").value,

                    from_email:
                    document.getElementById("email").value,

                    message:
                    document.getElementById("message").value

                }

            )

            .then(() => {

                alert(
                    "Message sent successfully 🚀"
                );

                contactForm.reset();

            })

            .catch((error) => {

                console.error(error);

                alert(
                    "Failed to send message ❌"
                );

            });

        }
    );

}

/* =====================================
   SCROLL TO TOP
===================================== */

window.addEventListener("scroll", () => {

    if (
        window.scrollY > 300
    ) {

        document.body.classList.add(
            "scrolled"
        );

    } else {

        document.body.classList.remove(
            "scrolled"
        );

    }

});

console.log(
    "Portfolio Loaded Successfully 🚀"
);
/* =====================================
   VIDEO MUTE TOGGLE
===================================== */

document
.querySelectorAll(".reel-card")
.forEach(card => {

    const video =
    card.querySelector("video");

    const button =
    card.querySelector(".mute-btn");

    button.addEventListener(
        "click",
        () => {

            video.muted =
            !video.muted;

            button.textContent =
            video.muted
            ? "🔇"
            : "🔊";

        }
    );

});