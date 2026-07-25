// ===== زر الترس والقائمة =====
const toggleBtn = document.getElementById("infoToggleBtn");
const infoCard = document.getElementById("infoCard");

// عند النقر على الزر
toggleBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // لمنع انتشار الحدث للخارج
  // تبديل الكلاس show
  infoCard.classList.toggle("show");
});

// إغلاق القائمة عند النقر خارجها (اختياري ولكن مفيد)
document.addEventListener("click", function (e) {
  // إذا كانت القائمة ظاهرة والنقرة خارج الزر والقائمة
  if (
    infoCard.classList.contains("show") &&
    !infoCard.contains(e.target) &&
    e.target !== toggleBtn &&
    !toggleBtn.contains(e.target)
  ) {
    infoCard.classList.remove("show");
  }
});

// إغلاق القائمة بالضغط على زر Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && infoCard.classList.contains("show")) {
    infoCard.classList.remove("show");
  }
});
