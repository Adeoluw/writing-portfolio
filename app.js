const processCards = document.getElementsByClassName("process-card");

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

