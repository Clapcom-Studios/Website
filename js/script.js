function openPopup(memberId) {
    var popup = document.getElementById("popup");
    var popupDetail = document.getElementById("popup-detail");

    // Aquí puedes cargar el contenido detallado del miembro según su ID
    var memberDetails = {
        member1: "<h2>Nombre del Miembro 1</h2><p>Información detallada del miembro 1.</p>"
        // Añade más miembros según sea necesario
    };

    popupDetail.innerHTML = memberDetails[memberId];
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

// Cierra el pop-up si el usuario hace clic fuera de él
window.onclick = function(event) {
    var popup = document.getElementById("popup");
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member .overlay');
    teamMembers.forEach((member, index) => {
        if (index % 2 === 0) {
            member.classList.add('overlay-green');
        } else {
            member.classList.add('overlay-hardgreen');
        }
    });
});

function filterMembers(cargo) {
    var members = document.getElementsByClassName('team-member');

    for (var i = 0; i < members.length; i++) {
        if (cargo === 'all') {
            members[i].style.display = 'block';
        } else if (members[i].classList.contains(cargo)) {
            members[i].style.display = 'block';
        } else {
            members[i].style.display = 'none';
        }
    }
}