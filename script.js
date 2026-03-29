const noBtn = document.getElementById('noBtn');
const audio = document.getElementById('success-sound');

function moveButton() {
    noBtn.style.position = 'float';
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});

function success() {
    // 1. Play the music
    audio.play();

    // 2. Change the screen content
    document.getElementById('yesBtn').innerHTML = `
        <h1 style="color: #fff; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">Yay! Best friends forever! 🤍</h1>
        <img src="cat.jpg" style="width:250px; border-radius:15px; margin-top: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
    `;
}
