// ===== OBJETO DE PROYECTOS =====
const projects = {
  1: {
    images: [
      "img/principito/el principito.png",
      "img/principito/mokup.png",
      "img/principito/mokupanashe.png",
      "img/principito/mokuplibro.png"
    ],
    description:
      "Un pequeño príncipe viaja desde su planeta por el universo en busca de sabiduría. En la Tierra aprende, gracias a un zorro, que lo esencial es invisible a los ojos. Es una reflexión sobre la inocencia, el amor y la mirada del corazón.",
  },
  2: {
    images: [
      "img/el señor de las moscas/elseñordelasmoscas.png",
      "img/el señor de las moscas/mockup_3.png",
      "img/el señor de las moscas/mockup2.png",
      "img/el señor de las moscas/tercer.png"
    ],
    description: "Un grupo de niños naufraga en una isla desierta y trata de organizarse sin adultos. Poco a poco, la convivencia degenera en caos y violencia, mostrando la fragilidad de la civilización y la presencia del mal en el ser humano.",
  },
  3: {
    images: [
      "img/rebelion/portadagranja.png",
      "img/rebelion/mockup_1.png",
      "img/rebelion/mockup2.png",
      "img/rebelion/tercerrebelio.png"

    ],
    description:
      "Los animales de una granja se rebelan contra los humanos para crear una sociedad justa e igualitaria. Sin embargo, los cerdos acaban corrompiéndose y repitiendo las mismas injusticias que querían eliminar. Es una alegoría del poder y la traición de los ideales revolucionarios.",
  },
    4: {
    images: [
      "img/isla/isla.png",
      "img/isla/primer.png",
      "img/isla/segundo.png",
       "img/isla/tercer.png"

    ],
    description:
      "El joven Jim Hawkins encuentra un mapa del tesoro y se embarca en una peligrosa aventura junto a piratas y marineros en busca de riquezas. Enfrenta la codicia y la traición del famoso Long John Silver. Es un clásico de aventuras sobre el valor, la ambición y la madurez.",
  },

   5: {
    images: [
      "img/robinson/Nuevo Robinson.png",
      "img/robinson/ockup3.png",
      "img/robinson/book.png",
      "img/robinson/mokuorobn.png"

    ],
    description:
      "Tras un naufragio, Robinson Crusoe queda solo en una isla desierta. Allí aprende a sobrevivir, construir su refugio y convivir con la soledad hasta rescatar a Viernes, un nativo con quien forma una amistad. Es una historia sobre la supervivencia, la fe y la capacidad humana de adaptación.",
  },

   6: {
    images: [
      "img/guilliver/guiliver.png",
      "img/guilliver/primerguilli.png",
      "img/guilliver/segundoguilli.png",
      "img/guilliver/tercerguilli.png"

    ],
    description:
      "Gulliver emprende varios viajes a mundos fantásticos: en Lilliput es un gigante entre diminutos; en Brobdingnag es pequeño entre gigantes; luego visita la isla científica de Laputa; y finalmente vive entre los houyhnhnms, caballos racionales que lo hacen cuestionar a la humanidad. Cada aventura funciona como una crítica satírica a la sociedad y sus defectos",
  },

   7: {
    images: [
      "img/hoguera/portada.png",
      "img/hoguera/priemer.png",
      "img/hoguera/aura.png",
      "img/hoguera/segundo.png"

    ],
    description:
      "Un hombre viaja solo a través del implacable frío del Yukón, confiado en que puede soportar temperaturas extremas. A pesar de las advertencias, subestima la naturaleza. Tras mojarse accidentalmente, intenta encender una hoguera para sobrevivir, pero el clima y sus propias decisiones lo llevan al fracaso. Incapaz de calentarse y debilitado por el frío, comprende demasiado tarde que la naturaleza es más fuerte que él.",
  }

};

// ===== SELECCIÓN DE ELEMENTOS =====
const modal = document.getElementById("modal");
const modalImg = document.getElementById("carousel-img");
const description = document.getElementById("project-description");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const projectLink = document.getElementById("project-link"); // 🔹 CORRECTO ID

let currentProject = null;
let currentIndex = 0;

// ===== ABRIR MODAL =====
document.querySelectorAll(".work").forEach((work) => {
  work.addEventListener("click", () => {
    const projectId = work.dataset.project;
    currentProject = projects[projectId];
    currentIndex = 0;

    // Mostrar primera imagen y descripción
    modalImg.src = currentProject.images[currentIndex];
    description.textContent = currentProject.description;

    // Actualizar el botón de enlace
    if (currentProject.link) {
      projectLink.href = currentProject.link;
      projectLink.style.display = "inline-block";
    } else {
      projectLink.style.display = "none";
    }

    // Mostrar modal
    modal.style.display = "flex";
  });
});

// ===== CERRAR MODAL =====
closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// ===== CARRUSEL MANUAL =====
nextBtn.onclick = () => changeImage(1);
prevBtn.onclick = () => changeImage(-1);

function changeImage(dir) {
  currentIndex =
    (currentIndex + dir + currentProject.images.length) %
    currentProject.images.length;
  modalImg.src = currentProject.images[currentIndex];
}
