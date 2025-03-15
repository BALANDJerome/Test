const divs = document.querySelectorAll(".zoomDiv > div");
const crea = document.querySelector(".creatDiv");

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

let ind = 0;
const createDiv = () => {
  console.log(ind);
  if (ind < 10) {
    crea.innerHTML += `<div></div>`;
    ind += 1;
    console.log(ind);
    setTimeout(() => {
      createDiv();
    }, 1000);
  } else {
    ind = 0;
    console.log("stop");
  }
};
createDiv();
