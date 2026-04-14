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

const typing = document.querySelector(".typing");

function loopTyping() {

    const current = words[wordIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
            deleting = true;
            setTimeout(loopTyping, 1200);
            return;
        }

    } else {
        typing.textContent = current.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(loopTyping, deleting ? 40 : 90);
}

loopTyping();