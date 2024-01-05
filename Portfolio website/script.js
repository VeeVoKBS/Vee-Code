const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
// const sections = document.querySelectorAll("section");
// const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [99, 88, 70, 70];

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  // sections.forEach((section, i) => {
  //   if (window.pageYOffset >= section.offsetTop - 10) {
  //     navbarLinks[i].classList.add("change");
  //   }
  //  });
});
