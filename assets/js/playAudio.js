// ========= VARIABLES ======== \\

const homeLink = document.querySelector("#homeLink");
const aboutLink = document.querySelector("#aboutLink");
const resumeLink = document.querySelector("#resumeLink");
const servicesLink = document.querySelector("#servicesLink");
const portfolioLink = document.querySelector("#portfolioLink");
const contactLink = document.querySelector("#contactLink");
const links = [aboutLink, resumeLink, servicesLink, portfolioLink, contactLink];
const smallPlayButton = document.querySelector("#smallPlayButton");
const smallPauseButton = document.querySelector("#smallPauseButton");
const glitchElements = document.querySelectorAll('.textGlitch-animation');

let checkState = false;
let button = document.querySelector("#button");
let musicImg = document.querySelector("#musicPlayerImage");
let music = document.querySelector("#test-song");
let isHomePage = true;
let isPlaying = false;

// ======= INITIALIZATION ====== \\

toggleSmallMusicPlayer();
startGlitch();

// ======= EVENT LISTENERS ====== \\

button.addEventListener("click", ()=> {
    music.volume = 0.05;
    if(checkState === false) {
        musicImg.classList.add("musicActive");
        button.classList.remove("musicPlayerButtonPlay");
        button.classList.add("musicPlayerButtonPause");
        smallPlayButton.style.display = "none";
        smallPauseButton.style.display = "block";
        music.play();
    }else {
        musicImg.classList.remove("musicActive");
        button.classList.remove("musicPlayerButtonPause");
        button.classList.add("musicPlayerButtonPlay");
        smallPlayButton.style.display = "block";
        smallPauseButton.style.display = "none";
        music.pause();
    }
    checkState = !checkState;
    isPlaying = !isPlaying;
});
homeLink.addEventListener('click', () => {
    isHomePage = true;
    updateMusicPlayerPositionAndSize();
});
links.forEach((link) => {
    link.addEventListener("click", () => {
        isHomePage = false;
        updateMusicPlayerPositionAndSize();
    });
});
window.addEventListener("resize", toggleSmallMusicPlayer);
smallPlayButton.addEventListener("click", togglePlayPause);
smallPauseButton.addEventListener("click", togglePlayPause);

// ========= FUNCTIONS ======== \\

function startGlitch() {
    const glitchElements = document.querySelectorAll('.textGlitch-animation');
    const randomDelay = Math.floor(Math.random() * 21) + 2;
    const randomDelayInMilliseconds = randomDelay * 1000;


    function applyGlitchAnimation() {
        glitchElements.forEach((element) => {
            element.style.animation = 'none';
            setTimeout(() => {
                element.style.animation = `textGlitch 1s alternate-reverse`;
            }, 0);
        });
    }
    applyGlitchAnimation();
    setInterval(applyGlitchAnimation, randomDelayInMilliseconds);
}

function updateMusicPlayerPositionAndSize() {
    const musicContainer = document.querySelector("#musicPlayerWrapper");
    if (isHomePage) {
        musicContainer.style.top = "40%";
        musicContainer.style.right = "10px";
        musicContainer.classList.remove("shrink");
    } else {
        musicContainer.style.top = "-48px";
        musicContainer.style.right = "0";
        musicContainer.classList.add("shrink");
    }
}

function toggleSmallMusicPlayer() {
    const smallMusicPlayer = document.querySelector("#smallMusicPlayer");
    const musicContainer = document.querySelector("#musicPlayerWrapper");
    if (window.innerWidth <= 1598) {
        smallMusicPlayer.style.display = "flex";
        musicContainer.style.display = "none";
    } else {
        smallMusicPlayer.style.display = "none";
        musicContainer.style.display = "block";
        updateMusicPlayerPositionAndSize();
    }
}

function togglePlayPause() {
    music.volume = 0.05;
    if (isPlaying) {
        music.pause();
        button.classList.remove("musicPlayerButtonPause");
        button.classList.add("musicPlayerButtonPlay");
        musicImg.classList.remove("musicActive");
    } else {
        music.play();
        button.classList.add("musicPlayerButtonPause");
        button.classList.remove("musicPlayerButtonPlay");
        musicImg.classList.add("musicActive");
    }
    isPlaying = !isPlaying;
    checkState = !checkState;
    smallPlayButton.style.display = isPlaying ? "none" : "block";
    smallPauseButton.style.display = isPlaying ? "block" : "none";
}



