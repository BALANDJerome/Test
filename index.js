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
// let ind = 0;

for (d = 0; d < 8; d++) {
  crea.innerHTML += `<div></div>`;
  const div = document.querySelectorAll(".creatDiv div");
  div[d].style.background = `url(./assets/img/Image_${
    d + 1
  }_accueil.jpg) center/cover`;
}

// const createDiv = () => {
//   if (ind < 8) {
//     crea.innerHTML += `<div></div>`;
//     ind += 1;
//     const div = document.querySelectorAll(".creatDiv div");
//     div[
//       ind - 1
//     ].style.background = `url(./assets/img/Image_${ind}_accueil.jpg) center/cover`;

//     setTimeout(() => {
//       createDiv();
//     }, 10);
//   } else {
//     ind = 0;
//     console.log("stop");
//   }
// };
// createDiv();
