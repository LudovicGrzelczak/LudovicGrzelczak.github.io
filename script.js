const headerTitle = document.querySelector(".typewriter");
const txt = "Développeur Web Junior";
const myName = document.querySelector(".header-container");

// ************************ animation header-text *************
function typewriter(word, index) {
  if (index < word.length) {
    setTimeout(() => {
      headerTitle.innerHTML += `<span>${word[index]}<span>`;
      typewriter(txt, index + 1);
    }, 200);
  }
}
setTimeout(() => {
  typewriter(txt, 0);
}, 500);

// ************************ animation header-container *************

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    myName.classList.add("animate__animated", "animate__fadeOutDown");
  } else {
    myName.classList.remove("animate__animated", "animate__fadeOutDown");
    myName.classList.add("animate__animated", "animate__fadeInUp");
  }
});

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
