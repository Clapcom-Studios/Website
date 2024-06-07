document.addEventListener('DOMContentLoaded', () => {
    
    const defaultWeapon = 'Shotgun';
    document.getElementById('model').src = `weapons/${defaultWeapon}.glb`;
    updateWeaponStats(defaultWeapon, 10 * 2.5, 2.5 * 2.5, 5.4 * 2.5);
});

document.getElementById('shotgun').addEventListener('click', function () {
    document.getElementById('model').src = 'weapons/Shotgun.glb';
    updateWeaponStats('Shotgun', 10 * 2.5, 2.5 * 2.5, 5.4 * 2.5);
});

document.getElementById('submachine').addEventListener('click', function () {
    document.getElementById('model').src = 'weapons/Submachine.glb';
    updateWeaponStats('Submachine', 2.5 * 2.5, 5 * 2.5, 3.6 * 2.5);
});

document.getElementById('plasmaCannon').addEventListener('click', function () {
    document.getElementById('model').src = 'weapons/PlasmaCannon.glb';
    updateWeaponStats('Plasma Cannon', 1 * 2.5, 10 * 2.5, 6 * 2.5);
});

function updateWeaponStats(name, power, distance, rate) {
    document.getElementById('weapon-name').textContent = name;
    document.getElementById('power-bar').innerHTML = createBar(power);
    document.getElementById('distance-bar').innerHTML = createBar(distance);
    document.getElementById('rate-bar').innerHTML = createBar(rate);
    document.getElementById('weapon-stats').style.display = 'block';
}

function createBar(value) {
    let barHtml = '';
    const totalSquares = 25; 
    for (let i = 0; i < totalSquares; i++) {
        barHtml += `<div class='${i < value ? "active" : ""}'></div>`;
    }
    return barHtml;
}
