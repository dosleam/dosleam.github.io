// Défilement fluide des ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation dynamique du fond
const body = document.body;
let hue = 200;

function animateBackground() {
    hue += 0.3; // Change la vitesse en augmentant ou diminuant cette valeur
    body.style.background = `linear-gradient(135deg, hsl(${hue}, 70%, 30%), hsl(${hue + 60}, 80%, 40%))`;
}

// Appel à animateBackground toutes les 10ms pour une transition plus douce
setInterval(animateBackground, 10);
