// ===============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===============================

const reveals = document.querySelectorAll(".reveal");

function revealElements() {
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealElements);
revealElements();


// ===============================
// CONTADORES ANIMADOS
// ===============================

const counters = document.querySelectorAll(".counter");

function startCounters() {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let count = 0;

        const speed = target / 100;

        const updateCounter = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "%";

            }
        };

        updateCounter();
    });
}

let counterStarted = false;

window.addEventListener("scroll", () => {

    const statsSection = document.querySelector(".stats");

    if (!statsSection) return;

    const position = statsSection.getBoundingClientRect().top;

    if (position < window.innerHeight && !counterStarted) {

        startCounters();
        counterStarted = true;
    }
});


// ===============================
// NAVBAR COM EFEITO AO ROLAR
// ===============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(15,60,25,0.98)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.25)";

    } else {

        navbar.style.background = "rgba(20,80,35,0.95)";
        navbar.style.boxShadow = "none";
    }
});


// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.style.position = "fixed";
backToTop.style.bottom = "25px";
backToTop.style.right = "25px";
backToTop.style.width = "55px";
backToTop.style.height = "55px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.background = "#2e7d32";
backToTop.style.color = "#fff";
backToTop.style.fontSize = "24px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";
backToTop.style.transition = "0.3s";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ===============================
// EFEITO DE DIGITAÇÃO
// ===============================

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {

    const text = heroTitle.textContent;

    heroTitle.textContent = "";

    let index = 0;

    function typeWriter() {

        if (index < text.length) {

            heroTitle.textContent += text.charAt(index);

            index++;

            setTimeout(typeWriter, 70);
        }
    }

    typeWriter();
}


// ===============================
// ANIMAÇÃO DAS IMAGENS
// ===============================

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach((image) => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.08) rotate(1deg)";
    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";
    });
});


// ===============================
// DATA E HORA AUTOMÁTICA
// ===============================

function updateDateTime() {

    const dataElemento = document.getElementById("dataHora");

    if (!dataElemento) return;

    const agora = new Date();

    dataElemento.innerHTML =
        agora.toLocaleDateString("pt-BR") +
        " | " +
        agora.toLocaleTimeString("pt-BR");
}

setInterval(updateDateTime, 1000);
updateDateTime();


// ===============================
// EFEITO PARALLAX NO BANNER
// ===============================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    let scroll = window.pageYOffset;

    hero.style.backgroundPositionY = scroll * 0.5 + "px";
});


// ===============================
// MENSAGEM DE BOAS-VINDAS
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {

        alert(
            "🌱 Bem-vindo ao Agro Forte, Futuro Sustentável!\n\nConheça práticas que unem produtividade agrícola e preservação ambiental."
        );

    }, 1000);
});