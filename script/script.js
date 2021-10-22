const navButton = document.querySelector(".burger");
const navBar = document.querySelector(".main-ul");
const mainArrow = document.querySelector(".arrow");
const scrollTop = document.querySelector(".scroll-to-top");

mainArrow.addEventListener("click", () => {
  window.scrollTo(0, 800);
});
navButton.addEventListener("click", () => {
  navBar.classList.toggle("open");
});

setInterval(() => {
  if (window.scrollY >= 1000) {
    scrollTop.classList.add("show");
    scrollTop.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  } else {
    scrollTop.classList.remove("show");
  }
}, 300);
