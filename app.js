const processCards = document.getElementsByClassName("process-card");
const mobileMenu = document.querySelector(".mobile-menu")
const nav = document.querySelector(".nav")
const closeNav = document.querySelector(".close-menu")

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
  nav.style.display = "block"
  nav.style.right = "0"
  nav.style.transition = "all 1s ease"
  mobileMenu.style.display = "none"
  nav.classList.add("mobile-nav")
})

closeNav.addEventListener("click", () => {
  nav.style.display = "none"
  mobileMenu.style.display = "block"
  nav.classList.remove("mobile-nav")

  console.log("ligma")

})