window.addEventListener("load", () => {
    for (let i = 0; i < 80; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    
    // Randomly choose between heart and kiss emojis
    const emojis = ["❤️", "💋", "😘"];
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 8 + 2) + "s"; // 2-10 seconds

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000); // 10 seconds
}
