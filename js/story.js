const texts = [
    "You are about to be activated in the heart of the dark universe of Alien. Created by the Weyland-Yutani corporation, your existence is key in the balance of life and death. Are you ready to face your destiny?",
    "The year is 2400, and the Weyland-Yutani corporation has extended its reach to the darkest confines of the universe. As a human-Xenomorph hybrid created in their secret laboratories, your first sight will be GLS 667.",
    "Your existence is not an accident. You are programmed to clear the planet of hostile threats and retrieve critical data from bioengineering experiments. The creatures you will face are as much a part of you as the air you breathe. Prepare to fulfill your function.",
    "You are Raisen, the culmination of decades of genetic research, designed to be efficient, lethal, and obedient. Armed with cutting-edge technology and inhuman abilities, every step you take is calculated to carry out your mission.",
    "Navigate through abandoned facilities and alien landscapes filled with dangers. Each enemy you defeat, each secret you uncover, brings you closer to understanding your own existence. Manage your resources, optimize your capabilities, and discover the truth behind your creation.",
    "The truth behind your creation awaits to be discovered. Are you ready to challenge the confines of your programming and explore the purpose of your existence? Download Project Alien and take control of your destiny."
];
let currentTextIndex = 0;

// Agrega la creación del objeto Audio
const audio = new Audio('music/text_sound.wav'); // Cambia la URL al archivo de audio que desees utilizar

function animateText(content) {
    const title = document.querySelector("h1");
    const continueButton = document.getElementById("continueButton");
    
    continueButton.style.opacity = 0;  
    continueButton.style.visibility = "hidden";

    title.innerHTML = "";  
    let text = content.trim();
    let index = 0;
    const CHAR_TIME = 30;

    function requestCharAnimation(char, value, isLast) {
        setTimeout(function () {
            char.textContent = value;
            char.classList.add("fade-in");
            if (isLast) {
                continueButton.style.visibility = "visible"; 
                continueButton.style.opacity = 1;
                audio.pause(); 
            }
        }, CHAR_TIME);
    }

    function addChar() {
        if (index < text.length) {
            const char = document.createElement("span");
            char.classList.add("char");
            char.textContent = "▌";
            title.appendChild(char);
            const isLast = index === text.length - 1;
            requestCharAnimation(char, text.substr(index++, 1), isLast);
            if (index < text.length) {
                requestChar();
            }
        }
    }

    function requestChar(delay = 0) {
        setTimeout(addChar, CHAR_TIME + delay);
    }

    setTimeout(function() { 
        audio.play();
    }, 1000); 
    requestChar(1000);
}


animateText(texts[currentTextIndex]);

document.getElementById("continueButton").addEventListener("click", function() {
    if (currentTextIndex >= texts.length - 1) {
        window.location.href = "https://github.com/Clapcom-Studios/Alien-Extraction"; 
    } else {
        currentTextIndex++;
        animateText(texts[currentTextIndex]);
        this.style.opacity = 0;  
        this.style.visibility = "hidden";  
    }
});