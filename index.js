const div = document.querySelector("div");
let rotat = [0, 1];

const reset = (a, b) => {
  div.style.transform = "rotate(" + a + "deg) scale(" + b + ")";
  console.log(rotat);
};

div.addEventListener("click", (e) => {
  if (rotat[1] === 1) {
    reset((rotat[0] += 90), (rotat[1] = -1));
  } else reset((rotat[0] += 90), (rotat[1] = 1));
});
