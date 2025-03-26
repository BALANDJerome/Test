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
let divCrea;

for (d = 0; d < 8; d++) {
  crea.innerHTML += `<div></div>`;
  divCrea = document.querySelectorAll(".creatDiv div");
  if (d == 3) {
    divCrea[d].style.background = `linear-gradient(90deg, #ffffff00, #0a00ffe8),
    url(./assets/img/Image_${d + 1}_accueil.jpg) center/cover
    `;
  } else {
    divCrea[d].style.background = `url(./assets/img/Image_${
      d + 1
    }_accueil.jpg) center/cover`;
  }
}

creatButton.addEventListener("click", () => {
  creatButton.style.display = "none";
  for (d = 0; d < divCrea.length; d++) {
    if (d == 3) {
      divCrea[d].style.background = `url(./assets/img/Image_${
        d + 1
      }_accueil.jpg) center/cover`;
      divCrea[d].style.display = "block";
    } else {
      divCrea[d].style.display = "block";
    }
  }
});

// Extend

const pic = document.querySelectorAll(".carou");
const inpPics = document.getElementsByName("pics");
let indTest = 0;
let interval;

const changePic = (namePic) => {
  pic.forEach((divs) => {
    divs.classList.remove("view");
    if (divs.id == namePic) divs.classList.add("view");
  });
};

inpPics.forEach((radio) => {
  radio.addEventListener("click", (e) => {
    changePic(radio.id.slice(3));
    clearInterval(interval);
  });
});

const picsChecked = () => {
  inpPics.forEach((check) => {
    check.checked = false;
  });
  indTest++;
  if (indTest >= inpPics.length) indTest = 0;
  inpPics[indTest].checked = true;
  changePic(inpPics[indTest].id.slice(3));
};

interval = setInterval(() => {
  picsChecked();
}, 3000);
