const teamMembers = [
  {
    name: "Francesc Teruel",
    role: "Code Lead",
    imgSrc: "images/team/Francesc Teruel Rodríguez.jpg",
    category: "code",
    description: `My role in this project has been organizing and supervising the code team in completing their assignments and supporting them on the developed features whenever needed. <br><br>
    I have also contributed by improving and adding useful features to the engine, such as Prefabs, and I also solved performance related issues by using Profiling Tools. <br><br>
    During the development of the project I have discovered my interest in Graphics Programming, so I have dedicated myself especially to learn more about this topic and improve the graphical capabilities of the engine.`,
    tasks: `- Ymir Engine Development <br>
    - Resource Management<br>
    - Shader Pipeline<br>
    - Material Pipeline<br>
    - Lighting System<br>
    - Performance Profiling`,
    media: [
      { type: 'image', src: "images/projects/Francesc/1.png", description: "Description for image 1" },
      { type: 'image', src: "images/projects/Francesc/2.png", description: "Description for image 2" }
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/francesc-teruel-rodriguez/",
      github: "https://github.com/francesctr4",
      portfolio: "https://francesctr4.github.io/Portfolio/",
      artstation: "",
    }
  },
  {
    name: "Ivan Bermúdez",
    role: "Design Lead",
    imgSrc: "images/team/Iván Bermúdez Sagra.jpg",
    category: "design",
    description: "Ivan is the design lead, ensuring our games are visually stunning.",
    tasks: `- Ymir Engine Development <br>
    - Resource Management<br>
    - Shader Pipeline<br>
    - Material Pipeline<br>
    - Lighting System<br>
    - Performance Profiling`,
    media: [
      { type: 'image', src: "images/projects/Ivan/1.png", description: "Description for image 1" },
      { type: 'image', src: "images/projects/Ivan/2.png", description: "Description for image 2" }
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/ivan-bermudez-sagra/",
      github: "https://github.com/IBSilver",
      portfolio: "",
      artstation: "",
    }
  },
  {
    name: "David Ruiz",
    role: "Art Lead",
    imgSrc: "images/team/David_Ruiz.png",
    category: "art",
    description: `During this project, I have had the opportunity to lead and manage a talented team of artists, ensuring that our collective vision for the game was realized effectively and creatively.<br><br>
    One of my key responsibilities was organizing and coordinating the team's efforts, which involved both task assignment and ensuring timely deliveries despite tight deadlines. This experience has been both challenging and incredibly rewarding.<br><br>
    My work primarily focused on modeling and texturing characters, ensuring that each one was detailed and immersive. Additionally, I handled VFX, bringing our game world to life with dynamic and engaging visual effects. Another significant part of my role involved developing the studio’s branding and designing merchandise, helping to establish a strong identity for our project.<br><br>
    I am proud of what we have achieved, especially in creating a visually stunning and cohesive game world that stays true to the Alien IP. Despite all the problems coming from the engine, our team has produced exceptional results that we can all be proud of.`,
    tasks: `-Team & Tasks Organization<br>
    -Constant Artsitic Support<br>
    -Characters Modeling & Texturing<br>
    -VFX<br>
    -Studio Branding & Merchandising`,
    media: [
      { type: 'image', src: "images/projects/SoniaOjeda/TexRaisen1.png", description: "Raisen" },
      { type: 'image', src: "images/team/Dani Mañas Calvo.jpg", description: "Dani Mañas" },
      { type: 'video', src: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Description for video 1" },
      { type: 'gif', src: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif", description: "Description for GIF 1" }
    ],
    social: {
      twitter: "https://twitter.com/davidruiz",
      linkedin: "https://linkedin.com/in/david-ruiz-luengo",
      github: "https://github.com/xdavido",
      portfolio: "",
      artstation: "https://luengox.artstation.com",
    }
  }
];

const teamContainer = document.getElementById("team-container");

teamMembers.forEach((member) => {
  const card = document.createElement("div");
  card.classList.add("column-four", "filterDiv", member.category);
  card.innerHTML = `
    <div class="our-team" onclick="showPopup(${JSON.stringify(member).replace(/"/g, "&quot;")})">
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

filterSelection("all");

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
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
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

function showPopup(member) {
  document.getElementById("popup-name").innerText = member.name;
  document.getElementById("popup-role").innerText = member.role;
  document.getElementById("popup-description").innerHTML = member.description.replace(
    /\\n/g,
    "<br>"
  );
  document.getElementById("popup-tasks").innerHTML = member.tasks;
  document.getElementById("popup-img").src = member.imgSrc;

  // Añadir HTML para iconos de redes sociales con enlaces personalizados o desactivados
  document.getElementById("popup-social-icons").innerHTML = `
    <div class="social-icons">
      <a href="${member.social.linkedin || "#"}" target="_blank" class="${member.social.linkedin ? "" : "disabled"}"><i class="fab fa-linkedin"></i></a>
      <a href="${member.social.github || "#"}" target="_blank" class="${member.social.github ? "" : "disabled"}"><i class="fab fa-github"></i></a>
      ${
        member.category === "art"
          ? `<a href="${member.social.artstation || "#"}" target="_blank" class="${member.social.artstation ? "" : "disabled"}"><i class="fab fa-artstation"></i></a>`
          : ""
      }
      <a href="${member.social.portfolio || "#"}" target="_blank" class="${member.social.portfolio ? "" : "disabled"}"><i class="fas fa-user"></i></a>
    </div>
  `;

  // Añadir las imágenes de la galería
  const galleryContainer = document.getElementById("popup-gallery");
  const gallerySection = document.getElementById("popup-gallery-section"); // Sección completa de la galería personal

  galleryContainer.innerHTML = "";
  if (member.media && member.media.length > 0) {
    gallerySection.style.display = "block";
    member.media.forEach((item) => {
      let mediaElement = document.createElement("div");
      mediaElement.classList.add("media-item");
      if (item.type === 'image') {
        mediaElement.innerHTML = `<img src="${item.src}"><p>${item.description}</p>`;
      } else if (item.type === 'video') {
        mediaElement.innerHTML = `<iframe src="${item.src}" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>${item.description}</p>`;
      } else if (item.type === 'gif') {
        mediaElement.innerHTML = `<img src="${item.src}"><p>${item.description}</p>`;
      } else if (item.type === 'mp4') {
        mediaElement.innerHTML = `<video width="560" height="315" controls><source src="${item.src}" type="video/mp4">Your browser does not support the video tag.</video><p>${item.description}</p>`;
      }
      galleryContainer.appendChild(mediaElement);
    });
  } else {
    gallerySection.style.display = "none";
  }

  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}