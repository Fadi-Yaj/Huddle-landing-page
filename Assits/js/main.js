// ===== Gear and menu button =====
const toggleBtn = document.getElementById("infoToggleBtn");
const infoCard = document.getElementById("infoCard");

// When you click the button
toggleBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // To prevent the incident from spreading outwards.
  // Toggle the 'show' class
  infoCard.classList.toggle("show");
});

// Close the menu when clicking outside it (optional but useful)
document.addEventListener("click", function (e) {
  // If the menu is visible and the click is outside the button and the menu
  if (
    infoCard.classList.contains("show") &&
    !infoCard.contains(e.target) &&
    e.target !== toggleBtn &&
    !toggleBtn.contains(e.target)
  ) {
    infoCard.classList.remove("show");
  }
});
