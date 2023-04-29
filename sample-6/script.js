const features_li = document.getElementById("features_li");
const features = document.getElementById("features");
const company_li = document.getElementById("company_li");

const menudiv = document.getElementById("menu");
const menuimg = document.getElementById("menu-img");
const before = document.getElementById("before");

const mediaQuery = window.matchMedia("(max-width: 480px)");
if (mediaQuery.matches) {
  document.getElementById("main-img").src = "./image-hero-mobile.png";

  menuimg.addEventListener("click", () => {
    if (menudiv.style.display === "none") {
      menudiv.style.display = "block";
      before.style.display = "block";
      menuimg.src = "./icon-close-menu.svg";
      setTimeout(() => {
        menudiv.style.width = "60vw";
      }, 1);
    } else {
      menudiv.style.width = "0";
      menuimg.src = "./icon-menu.svg";
      before.style.display = "none";
      setTimeout(() => {
        menudiv.style.display = "none";
      }, 1);
    }
  });
}

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
