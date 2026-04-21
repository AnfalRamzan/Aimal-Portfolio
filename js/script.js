const words = [
    "SEO Expert",
    "WordPress Expert",
    "Medical Imaging Technologist",
    "Content Writer",
    "Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const typingElement = document.querySelector(".typing");
    if (!typingElement) return;

    const currentWord = words[wordIndex];
    
    if (!deleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(typeEffect, deleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", typeEffect);