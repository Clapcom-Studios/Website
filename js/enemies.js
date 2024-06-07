document.addEventListener('DOMContentLoaded', () => {
    const modelViewer = document.querySelector('model-viewer');

    function setupAnimations() {
        if (modelViewer.availableAnimations.length > 1) {
            let currentAnimationIndex = 0;
            modelViewer.addEventListener('animation-finish', () => {
                currentAnimationIndex = (currentAnimationIndex + 1) % modelViewer.availableAnimations.length;
                modelViewer.animationName = modelViewer.availableAnimations[currentAnimationIndex];
                modelViewer.play();
            });
        }
    }

    ['facehugger', 'spitter', 'xenomorph'].forEach(id => {
        document.getElementById(id).addEventListener('click', function () {
            modelViewer.src = `enemies/${this.id.charAt(0).toUpperCase() + this.id.slice(1)}.glb`;
            modelViewer.onload = () => {
                setupAnimations(); 
                modelViewer.play();
            };
            updateStats(this.id); 
        });
    });

    
    const defaultModelId = 'xenomorph'; 
    modelViewer.src = `enemies/${defaultModelId.charAt(0).toUpperCase() + defaultModelId.slice(1)}.glb`;
    modelViewer.onload = () => {
        setupAnimations();
        modelViewer.play();
    };
    updateStats(defaultModelId); 

    function updateStats(enemyId) {
        const stats = { 
            'facehugger': [25, 8.3, 8.3, 8.3],
            'xenomorph': [16.6, 16.6, 16.6, 16.6],
            'spitter': [8.3, 25, 25, 25],
        }[enemyId];
        updateEnemyStats(enemyId.charAt(0).toUpperCase() + enemyId.slice(1), ...stats);
    }

    function updateEnemyStats(name, speed, hp, damage, attackRange) {
        document.getElementById('enemy-name').textContent = name;
        document.getElementById('speed-bar').innerHTML = createBar(speed);
        document.getElementById('hp-bar').innerHTML = createBar(hp);
        document.getElementById('damage-bar').innerHTML = createBar(damage);
        document.getElementById('attack-range-bar').innerHTML = createBar(attackRange);
        document.getElementById('enemy-stats').style.display = 'block';
    }

    function createBar(value) {
        let barHtml = '';
        const totalSquares = 25; 
        for (let i = 0; i < totalSquares; i++) {
            barHtml += `<div class='${i < value ? "active" : ""}'></div>`;
        }
        return barHtml;
    }
});
