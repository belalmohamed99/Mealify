let btnMode = document.getElementById("btnMode");
btnMode.addEventListener("click", () => {
  if (btnMode.firstElementChild.classList.contains("fa-moon")) {
    btnMode.firstElementChild.classList.remove("fa-solid", "fa-moon");
    btnMode.firstElementChild.classList.add("fa-regular", "fa-sun");
  } else {
    btnMode.firstElementChild.classList.add("fa-solid", "fa-moon");
    btnMode.firstElementChild.classList.remove("fa-regular", "fa-sun");
  }
  const darkNav = document.querySelector("nav");
  darkNav.classList.toggle("mode-black");
  const darkCard = document.querySelectorAll(
    ".chefs .card, .contact-card , .form_contact"
  );
  darkCard.forEach((card) => {
    card.classList.toggle("mode-black");
  });
  const btnToYellow = document.querySelectorAll(
    "button , .footer-contact i , .contact .icon"
  );
  btnToYellow.forEach((btn) => {
    btn.classList.toggle("toYellow");
  });
  let darker = document.querySelectorAll(".chefs,.contact");
  darker.forEach((e) => {
    e.classList.toggle("darker");
  });
  let restSections = document.querySelectorAll("header,.gallery");
  restSections.forEach((e) => {
    e.classList.toggle("bg-dark");
  });
  let footerLogo = document.querySelectorAll("footer");
  footerLogo.forEach((e) => {
    e.classList.toggle("special");
  });
});
