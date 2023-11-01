// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const soundButtons = document.querySelectorAll(".sound-button");
    soundButtons.forEach(button => {
        button.addEventListener("click", function() {
            const sound = new Audio(button.dataset.sound);
            sound.play();
        });
    });

    const gameIframeContainer = document.querySelector(".game-iframe-container");
    const gameButtons = document.querySelectorAll(".play-button");
    
    gameButtons.forEach(button => {
        button.addEventListener("click", function() {
            const gameUrl = button.dataset.gameurl;
            loadGame(gameUrl);
        });
    });

    function loadGame(gameUrl) {
        gameIframeContainer.innerHTML = `<iframe src="${gameUrl}" frameborder="0" width="800" height="600"></iframe>`;
    }
});


