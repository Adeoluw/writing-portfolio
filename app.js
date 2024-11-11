const processCards = document.getElementsByClassName("process-card");
const mobileMenu = document.querySelector(".mobile-menu");
const nav = document.querySelector(".nav");
const closeNav = document.querySelector(".close-menu");

for (let i = 0; i < processCards.length; i++) {
  processCards[i].addEventListener("mouseenter", () => {
    processCards[i].classList.add("animate");
  });

  processCards[i].addEventListener("mouseleave", () => {
    setTimeout(() => {
      processCards[i].classList.remove("animate");
    }, 1000); //
  });
}

mobileMenu.addEventListener("click", () => {
  nav.style.display = "block";
  nav.style.right = "0";
  nav.style.position = "absolute";
  nav.style.opacity = "1"
  mobileMenu.style.display = "none";
  setTimeout(() => {
    nav.style.transition = "all 1s ease";
    nav.classList.add("mobile-nav");
  }, 100);
});

closeNav.addEventListener("click", () => {
  setTimeout(() => {
    nav.style.display = "none";
  }, 500);
  nav.style.opacity = "0"
  nav.style.top = "0"
  // nav.style.transform = "translateX(90px)"
  mobileMenu.style.display = "block";
  nav.classList.remove("mobile-nav");

  // console.log("ligma")
});

document.addEventListener("click", (e) => {
  if (
    !nav.contains(e.target) &&
    !closeNav.contains(e.target) &&
    !mobileMenu.contains(e.target)
  ) {
    nav.style.display = "none";
    mobileMenu.style.display = "block";
    nav.classList.remove("mobile-nav");
  }
});
