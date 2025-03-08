const div = document.querySelector("div");
let rotat = [0, 1];
let ids = 0;

const reset = (a, b) => {
  div.style.transform = "rotate(" + a + "deg) scale(" + b + ")";
};
const idsFunction = () => {
  const divId = document.getElementById(ids);
  const divIdM = document.getElementById(ids - 1);
  divId.style.width =
    divIdM.style.width.slice(0, divIdM.style.width.length - 2) / 2 + "vw";
  divId.style.height =
    divIdM.style.height.slice(0, divIdM.style.height.length - 2) / 2 + "vh";
  divId.style.background = "green";
};

div.addEventListener("click", (e) => {
  ids += 1;
  div.innerHTML += `<div id=${ids}></div>`;
  idsFunction();
  if (rotat[1] === 1) {
    reset((rotat[0] += 90), (rotat[1] = -1));
  } else reset((rotat[0] += 90), (rotat[1] = 1));
});
