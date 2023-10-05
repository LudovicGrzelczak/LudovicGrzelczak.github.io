const headerTitle = document.querySelector(".typewriter");
const txt = "Développeur Web Junior";
const myName = document.querySelector(".header-container");
const nav = document.querySelector("nav");
const boxNavHome = document.querySelector(".navbox-1");
const boxNavAboutMe = document.querySelector(".navbox-2");
const boxNavResume = document.querySelector(".navbox-3");
const boxNavCareer = document.querySelector(".navbox-4");
const boxNavContact = document.querySelector(".navbox-6");

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
}, 700);

// ************************ animation header-container *************

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 10) {
//     myName.classList.add("animate__animated", "animate__fadeOutDown");
//   } else {
//     myName.classList.remove("animate__animated", "animate__fadeOutDown");
//     myName.classList.add("animate__animated", "animate__fadeInUp");
//   }
// });

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 800 && window.scrollY <= 1650) {
    nav.style.background = "rgb(235, 235, 235)";
    nav.style.top = 0;
  } else if (window.scrollY > 1650 && window.scrollY <= 2500) {
    nav.style.background = "rgba(255, 255, 255, 1)";
    nav.style.top = 0;
  } else if (window.scrollY > 2500 && window.scrollY <= 4950) {
    nav.style.background = "rgba(235, 235, 235)";
    nav.style.top = 0;
    boxNavHome.style.color = "rgba(0, 0, 0)";
    boxNavAboutMe.style.color = "rgba(0, 0, 0)";
    boxNavResume.style.color = "rgba(0, 0, 0)";
    boxNavCareer.style.color = "rgba(0, 0, 0)";
    boxNavContact.style.color = "rgba(0, 0, 0)";
  } else if (window.scrollY > 4900) {
    nav.style.background = "rgb(58, 58, 58)";
    nav.style.top = 0;
    boxNavHome.style.color = "rgba(255, 255, 255)";
    boxNavAboutMe.style.color = "rgba(255, 255, 255)";
    boxNavResume.style.color = "rgba(255, 255, 255)";
    boxNavCareer.style.color = "rgba(255, 255, 255)";
    boxNavContact.style.color = "rgba(255, 255, 255)";
  } else {
    nav.style.top = "-60px";
  }
});
