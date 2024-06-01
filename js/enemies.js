document.getElementById('shotgun').addEventListener('click', function () {
    document.getElementById('model').src = 'weapons/Shotgun.glb';
    updateWeaponStats('Shotgun', 7, 4, 9);
});

document.getElementById('submachine').addEventListener('click', function () {
    document.getElementById('model').src = 'weapons/Submachine.glb';
    updateWeaponStats('Submachine', 5, 6, 10);
});

document.getElementById('plasmaCannon').addEventListener('click', function () {
    document.getElementById('model').src = 'weapons/PlasmaCannon.glb';
    updateWeaponStats('Plasma Cannon', 9, 5, 3);
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
    for (let i = 0; i < 10; i++) {
        barHtml += `<div style="${i < value ? 'background-color: #08f;' : 'background-color: #444;'}"></div>`;
    }
    return barHtml;
}
