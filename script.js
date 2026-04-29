const CONTACT_EMAIL = "info@mokummeesters.nl";

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const signupForm = document.querySelector("#signup-form");
const formNote = document.querySelector("#form-note");

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu?.classList.toggle("is-open") ?? false;
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navMenu.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

signupForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(signupForm);
  const subject = "Inschrijving Mokum Meesters";
  const body = [
    "Nieuwe inschrijving via mokummeesters.nl",
    "",
    `E-mailadres: ${data.get("email")}`,
    `Leeftijd kind: ${data.get("leeftijd")}`,
    "",
    "Bericht of vraag:",
    String(data.get("bericht") || "-"),
  ].join("\n");

  const mailto = new URL(`mailto:${CONTACT_EMAIL}`);
  mailto.searchParams.set("subject", subject);
  mailto.searchParams.set("body", body);

  window.location.href = mailto.toString();
  formNote.textContent =
    "Je e-mailprogramma is geopend. Controleer de gegevens en verstuur de mail om de inschrijving te voltooien.";
});
