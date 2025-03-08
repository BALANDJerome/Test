const div = document.querySelector("div");
let rotat = [0, 1];
let ids = 0;
let ind;

const reset = (a, b) => {
  div.style.transform = "rotate(" + a + "deg) scale(" + b + ")";
};

const idsFunction = () => {
  const divId = document.getElementById(ids);
  const divIdM = document.getElementById(ids - 1);
  divId.style.width =
    divIdM.style.width.slice(0, divIdM.style.width.length - 2) / 1.2 + "vw";
  divId.style.height =
    divIdM.style.height.slice(0, divIdM.style.height.length - 2) / 1.2 + "vh";
  divId.style.background = `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(
    Math.random() * 255
  )},${Math.ceil(Math.random() * 255)})`;
};
const alea = () => {
  ids += 1;
  div.innerHTML += `<div id=${ids}></div>`;
  idsFunction();
  if (rotat[1] === 1) {
    reset((rotat[0] += 90), (rotat[1] = -1));
  } else reset((rotat[0] += 90), (rotat[1] = 1));
};

div.addEventListener("click", () => {
  if (!ind) {
    alea();
    ind = setInterval(alea, 2020);
  } else {
    clearInterval(ind);
    ind = null;
  }
});
