const divs = document.querySelectorAll("div");

divs.forEach((div) => {
  const removeClass = () => {
    div.style.transform = "none";
    div.style.cursor = "zoom-in";
    div.classList.remove("zoom");
  };
  div.addEventListener("click", () => {
    if (!div.className) {
      div.style.transform = "scale(1.8)";
      div.style.cursor = "zoom-out";
      div.classList.add("zoom");
    } else {
      removeClass();
    }
  });
});
