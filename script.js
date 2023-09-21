const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 800) {
    nav.style.background = "rgb(235, 235, 235)";
    nav.style.top = 0;
  } else {
    nav.style.background = "rgba(255, 255, 255, 1)";
    nav.style.top = "-60px";
  }
});

const myName = document.querySelector(".header-container");
console.log(myName);

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    myName.style.opacity = 0;

  } else {
    myName.style.opacity = 1;

  }
});
