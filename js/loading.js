document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.display = 'flex';
        startLoadingAnimation();

        
        const minDelay = 800;  
        const maxDelay = 2000;
        const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1) + minDelay);

        
        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, randomDelay);
    }
});

const startLoadingAnimation = () => {
    TweenMax.to('#outer', 5, { repeat: -1, ease: Power0.easeNone, rotation: 360, transformOrigin: "50% 50%" });
    TweenMax.to('#inner', 5, { repeat: -1, ease: Power0.easeNone, rotation: -360, transformOrigin: "50% 50%" });
    TweenMax.staggerFrom('#s-1, #s-2, #s-3, #s-4, #s-5, #s-6, #s-7', 0.5, { opacity: 0, transformOrigin: '50% 50%', ease: Power4.easeNone, yoyo: true, scale: 0.1, repeat: -1 }, 0.15);
    TweenMax.to('h3', 0.75, { repeat: -1, yoyo: true, opacity: 0.2 });
};
