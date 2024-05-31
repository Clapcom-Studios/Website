// Información de los miembros del equipo
const teamMembers = {
    Francesc: {
        name: 'Francesc Teruel',
        position: 'Code Lead',
        roles: ['lead', 'code'],
        imageSrc: 'images/students/Francesc Teruel Rodríguez.jpg',
        overlayDescription: "Es literalmente la CABRA del proyecto, THE CLAPCOM GOAT"
        + "Es literalmente la CABRA del proyecto, THE CLAPCOM GOAT",
        additionalDescription: 'Su trabajo ha sido irremplazable a lo largo de todo el proyecto.'
    },
    David: {
        name: 'David Ruiz',
        position: 'Art Lead',
        roles: ['lead', 'art'],
        imageSrc: 'images/students/David Ruiz.png',
        overlayDescription: 'El maestro del arte del proyecto',
        additionalDescription: 'Dibuja increíblemente bien, por eso es el líder de arte.'
    },
    // Añade más miembros aquí
    Arnau: {
        name: 'Arnau González',
        position: 'Art Member',
        roles: ['art'],
        imageSrc: 'images/students/Arnau González Acosta.jpeg',
        overlayDescription: "Un importante miembro de arte que se ha encargado de una gran parte del escenario",
        additionalDescription: 'No se que hay que poner aqui exactamente'
    },
    Ivan: {
        name: 'Iván Bermúdez',
        position: 'Design Lead',
        roles: ['design' , 'lead'],
        imageSrc: 'images/students/Iván Bermúdez Sagra.jpg',
        overlayDescription: "El lead del departamento de Diseño. Encargado de la supervisión y dirección del diseño",
        additionalDescription: 'No se que hay que poner aqui exactamente'
    },
};

// Función para generar la lista de miembros del equipo
function generateTeamMembers() {
    const teamContainer = document.getElementById('team-container');
    teamContainer.innerHTML = '';

    const membersArray = Object.entries(teamMembers);
    for (let i = 0; i < membersArray.length; i++) {
        const [memberName, member] = membersArray[i];
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('team-member', ...member.roles);
        memberDiv.onclick = () => openPopup(memberName);

        const photoDiv = document.createElement('div');
        photoDiv.classList.add('photo');

        const img = document.createElement('img');
        img.src = member.imageSrc;
        img.alt = member.name;

        const overlayDiv = document.createElement('div');
        overlayDiv.classList.add('overlay');

        // Alterna el color entre rojo y verde basado en el índice del miembro
        if (i % 2 === 0) {
            overlayDiv.style.backgroundColor = 'rgba(0, 29, 2, 0.7)';
        } else {
            overlayDiv.style.backgroundColor = 'rgba(0, 141, 12, 0.7)';
        }

        overlayDiv.innerHTML = `${member.name} // ${member.position}<br><br>${member.overlayDescription}`;

        photoDiv.appendChild(img);
        photoDiv.appendChild(overlayDiv);
        memberDiv.appendChild(photoDiv);
        teamContainer.appendChild(memberDiv);
    }
}


// Función para abrir el pop-up con la información del miembro
function openPopup(memberKey) {
    const member = teamMembers[memberKey];
    
    if (!member) return;

    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupPosition = document.getElementById('popup-position');
    const popupImage = document.getElementById('popup-image');
    const popupDescription = document.getElementById('popup-description');
    const popupAdditionalInfo = document.getElementById('popup-additional-info');

    popupTitle.textContent = member.name;
    popupPosition.textContent = member.position;
    popupImage.src = member.imageSrc;
    popupDescription.textContent = member.overlayDescription;
    popupAdditionalInfo.textContent = member.additionalDescription;

    popup.style.display = 'block';
}

// Función para cerrar el pop-up
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Función para filtrar los miembros del equipo
function filterMembers(cargo) {
    const members = document.getElementsByClassName('team-member');

    for (let i = 0; i < members.length; i++) {
        if (cargo === 'all') {
            members[i].style.display = 'block';
        } else if (members[i].classList.contains(cargo)) {
            members[i].style.display = 'block';
        } else {
            members[i].style.display = 'none';
        }
    }
}

// Cierra el pop-up si se hace clic fuera de él
window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}

// Genera los miembros del equipo al cargar la página
window.onload = generateTeamMembers;
