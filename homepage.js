const navacess = document.querySelector(".phone-section-image");
const phoneSection = document.querySelector(".phone-section");
const crossBtn = document.querySelector(".cross-section-image");

navacess.addEventListener("click", () => {
   phoneSection.style.visibility = "visible";
});

crossBtn.addEventListener("click", () => {
   phoneSection.style.visibility = "hidden";
});
