const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};
// create map
const map = L.map("mapid", options).setView([-27.2058128, -49.6934283], 15);

// creaate and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create and add marker
L.marker([-27.2058128, -49.6934283], { icon }).addTo(map);

/* image da galeria */
function selectImage(event) {
  const button = event.currentTarget;

  console.log(button.children);

  // remove a classe .active do botão
  const buttons = document.querySelectorAll(" .images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  // selecionar a imagem clicada do
  const image = button.children[0];
  const imageContainer = document.querySelector(" .orphanage-details > img");

  // atualizar o container de imagem
  imageContainer.src = image.src;

  // adiconar a classe .active para o botão clicados
  button.classList.add("active");
}


/*
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;

const map = L.map("mapid", options).setView([lat, lng], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popAnchor: [170, 2],
});

L.marker([lat, lng], { icon }).addTo(map);

/* image gallery *

function selectImage(event) {
  const button = event.currentTarget;

  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  imageContainer.src = image.src;

  button.classList.add("active");
}
*/