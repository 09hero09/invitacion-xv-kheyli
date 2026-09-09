/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1800);

});



/* =========================================================
   LUCIÉRNAGAS
========================================================= */

const firefliesContainer =
    document.getElementById("fireflies");


function createFireflies() {

    const amount =
        window.innerWidth < 700 ? 35 : 65;


    for (let i = 0; i < amount; i++) {

        const firefly =
            document.createElement("div");

        firefly.classList.add("firefly");


        const size =
            Math.random() * 4 + 2;

        const left =
            Math.random() * 100;

        const top =
            Math.random() * 100;

        const duration =
            Math.random() * 10 + 8;

        const glowDuration =
            Math.random() * 2 + 1;

        const delay =
            Math.random() * -15;


        firefly.style.width =
            `${size}px`;

        firefly.style.height =
            `${size}px`;

        firefly.style.left =
            `${left}%`;

        firefly.style.top =
            `${top}%`;

        firefly.style.animationDuration =
            `${duration}s, ${glowDuration}s`;

        firefly.style.animationDelay =
            `${delay}s, ${delay}s`;


        firefliesContainer.appendChild(
            firefly
        );

    }

}


createFireflies();



/* =========================================================
   REVEAL AL HACER SCROLL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =========================================================
   NAVEGACIÓN ACTIVA
========================================================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-dot");


const sectionObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );

                    });


                    const active =
                        document.querySelector(
                            `.nav-dot[href="#${entry.target.id}"]`
                        );


                    if (active) {

                        active.classList.add(
                            "active"
                        );

                    }

                }

            });

        },

        {
            threshold: 0.55
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});



/* =========================================================
   CUENTA REGRESIVA
========================================================= */

const targetDate =
    new Date(
        "September 25, 2026 17:00:00"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        targetDate - now;


    if (difference <= 0) {

        document.getElementById("days")
            .textContent = "00";

        document.getElementById("hours")
            .textContent = "00";

        document.getElementById("minutes")
            .textContent = "00";

        document.getElementById("seconds")
            .textContent = "00";

        document.querySelector(
            ".countdown-message"
        ).textContent =
            "Hoy comienza nuestra gran noche ✦";

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days")
        .textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);



/* =========================================================
   MÚSICA
========================================================= */

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");

const musicText =
    document.getElementById("musicText");


let playing = false;


musicButton.addEventListener(
    "click",
    () => {

        if (!playing) {

            music.play()
                .then(() => {

                    playing = true;

                    musicButton.classList.add(
                        "playing"
                    );

                    musicText.textContent =
                        "Sonando";

                })
                .catch(() => {

                    alert(
                        "Agrega el archivo ma-belle-evangeline.mp3 dentro de la carpeta assets."
                    );

                });

        } else {

            music.pause();

            playing = false;

            musicButton.classList.remove(
                "playing"
            );

            musicText.textContent =
                "Música";

        }

    }
);



/* =========================================================
   MOVIMIENTO SUAVE DEL FONDO
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        const scrolled =
            window.scrollY;

        const hero =
            document.querySelector(".hero");

        if (hero) {

            hero.style.backgroundPosition =
                `center ${scrolled * 0.25}px`;

        }

    }
);



/* =========================================================
   EFECTO PARALLAX DEL MOUSE
========================================================= */

document.addEventListener(
    "mousemove",
    (event) => {

        const x =
            (event.clientX /
                window.innerWidth - .5);

        const y =
            (event.clientY /
                window.innerHeight - .5);


        document.documentElement.style.setProperty(
            "--mouse-x",
            `${x * 15}px`
        );


        document.documentElement.style.setProperty(
            "--mouse-y",
            `${y * 15}px`
        );

    }
);