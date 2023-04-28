const features_li = document.getElementById("features_li");
const company_li = document.getElementById("company_li");

features_li.addEventListener("mouseover", () => {
  document.getElementById("fea_img").src = "icon-arrow-up.svg";
});
features_li.addEventListener("mouseout", () => {
  document.getElementById("fea_img").src = "icon-arrow-down.svg";
});
company_li.addEventListener("mouseover", () => {
  document.getElementById("com_img").src = "icon-arrow-up.svg";
});
company_li.addEventListener("mouseout", () => {
  document.getElementById("com_img").src = "icon-arrow-down.svg";
});

const mediaQuery = window.matchMedia("(max-width: 480px)");
if (mediaQuery.matches) {
  document.getElementById("main-img").src = "./image-hero-mobile.png";
}
