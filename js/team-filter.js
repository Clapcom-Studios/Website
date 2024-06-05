const teamMembers = [
  {
    name: "Francesc Teruel",
    role: "Code Lead",
    imgSrc: "images/team/Francesc Teruel Rodríguez.jpg",
    category: "code",
    description: "FRANSEX the GOAT. FRANSEX the GOAT.FRANSEX the GOAT.FRANSEX the GOAT.FRANSEX the GOAT.FRANSEX the GOAT.FRANSEX the GOAT.FRANSEX the GOAT.FRANSEX the GOAT.FRANSEX the GOAT.FRANSEX the GOAT.FRANSEX the GOAT.FRANSEX the GOAT.FRANSEX the GOAT.",
    social: {
      facebook: "",
      twitter: "https://twitter.com/francescteruel",
      linkedin: "https://linkedin.com/in/francescteruel",
      github: "https://github.com/francesctr4",
      portfolio: "",
      artstation: "",
    }
  },
  {
    name: "Ivan Bermúdez",
    role: "Design Lead",
    imgSrc: "images/team/Iván Bermúdez Sagra.jpg",
    category: "design",
    description: "Ivan is the design lead, ensuring our games are visually stunning.",
    social: {
      facebook: "https://facebook.com/ivanbermudez",
      twitter: "https://twitter.com/ivanbermudez",
      linkedin: "https://linkedin.com/in/ivanbermudez",
      github: "",
      portfolio: "",
      artstation: "",
    }
  },
  {
    name: "David Ruiz",
    role: "Art Lead",
    imgSrc: "images/team/David_Ruiz.png",
    category: "art",
    description: "Como dibuja el tio que bueno es el lead :)Como dibuja el tio que bueno es el lead :)Como dibuja el tio que bueno es el lead :)Como dibuja el tio que bueno es el lead :)Como dibuja el tio que bueno es el lead :)Como dibuja el tio que bueno es el lead :)Como dibuja el tio que bueno es el lead :)Como dibuja el tio que bueno es el lead :)Como dibuja el tio que bueno es el lead :)Como dibuja el tio que bueno es el lead :)Como dibuja el tio que bueno es el lead :)Como dibuja el tio que bueno es el lead :)Como dibuja el tio que bueno es el lead :)Como dibuja el tio que bueno es el lead :)Como dibuja el tio que bueno es el lead :)Como dibuja el tio que bueno es el lead :)",
    social: {
      facebook: "https://facebook.com/davidruiz",
      twitter: "https://twitter.com/davidruiz",
      linkedin: "https://linkedin.com/in/davidruiz",
      github: "",
      portfolio: "",
      artstation: "",
    }
  }
];

const teamContainer = document.getElementById('team-container');

teamMembers.forEach(member => {
  const card = document.createElement('div');
  card.classList.add('column-four', 'filterDiv', member.category);
  card.innerHTML = `
    <div class="our-team" onclick="showPopup('${member.name}', '${member.role}', '${member.category}', '${member.imgSrc}', '${member.description}', ${JSON.stringify(member.social).replace(/"/g, '&quot;')})">
      <div class="pic">
        <img src="${member.imgSrc}">
      </div>
      <div class="team-content">
        <h3 class="title">${member.name}</h3>
        <span class="post">${member.role}</span>
      </div>
    </div>
  `;
  teamContainer.appendChild(card);
});

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function showPopup(name, role, category, imgSrc, description, social) {
  document.getElementById('popup-name').innerText = name;
  document.getElementById('popup-role').innerText = role;
  document.getElementById('popup-description').innerText = description;
  document.getElementById('popup-img').src = imgSrc;

  // Añadir HTML para iconos de redes sociales con enlaces personalizados o desactivados
  document.getElementById('popup-social-icons').innerHTML = `
    <div class="social-icons">
      <a href="${social.linkedin || '#'}" target="_blank" class="${social.linkedin ? '' : 'disabled'}"><i class="fab fa-linkedin"></i></a>
      <a href="${social.github || '#'}" target="_blank" class="${social.github ? '' : 'disabled'}"><i class="fab fa-github"></i></a>
      ${category === 'art' ? `<a href="${social.artstation || '#'}" target="_blank" class="${social.artstation ? '' : 'disabled'}"><i class="fab fa-artstation"></i></a>` : ''}
      <a href="${social.portfolio || '#'}" target="_blank" class="${social.portfolio ? '' : 'disabled'}"><i class="fas fa-user"></i></a>
    </div>
  `;

  document.getElementById('popup').style.display = 'block';
}


function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
