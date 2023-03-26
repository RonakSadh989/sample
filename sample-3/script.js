let ham = document.getElementById("ham");
let ul = document.getElementById("ul");
ham.addEventListener("mouseover", () => {
  ul.classList.add("ul");
});
ham.addEventListener("mouseout", () => {
  ul.classList.remove("ul");
});
