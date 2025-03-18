const divs = document.querySelectorAll(".zoomDiv > div");

// Zoom boite

divs.forEach((div) => {
  const removeClass = () => {
    divs.forEach((b) => {
      if (b.className) {
        b.style.transform = "none";
        b.style.cursor = "zoom-in";
        b.classList.remove("zoom");
      }
    });
  };
  div.addEventListener("click", () => {
    if (!div.className) {
      removeClass(div);
      div.style.transform = "scale(1.8)";
      div.style.cursor = "zoom-out";
      div.classList.add("zoom");
    } else {
      removeClass(div);
    }
  });
});

// creation boite

const crea = document.querySelector(".creatDiv");
const creaButton = document.querySelector("#creatButton");
let div;

for (d = 0; d < 8; d++) {
  crea.innerHTML += `<div></div>`;
  div = document.querySelectorAll(".creatDiv div");
  if (d == 3) {
    div[d].style.background = `linear-gradient(90deg, #ffffff00, #0a00ffe8),
    url(./assets/img/Image_${d + 1}_accueil.jpg) center/cover
    `;
  } else {
    div[d].style.background = `url(./assets/img/Image_${
      d + 1
    }_accueil.jpg) center/cover`;
  }
}

creatButton.addEventListener("click", () => {
  creatButton.style.display = "none";
  for (d = 0; d < div.length; d++) {
    if (d == 3) {
      div[d].style.background = `url(./assets/img/Image_${
        d + 1
      }_accueil.jpg) center/cover`;
      div[d].style.display = "block";
    } else {
      div[d].style.display = "block";
    }
  }
});
