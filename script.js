const CONTACT_EMAIL = "Mokummeesters@gmail.com";

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
    `Naam kind: ${data.get("naamKind")}`,
    `Geboortedatum: ${data.get("geboortedatum")}`,
    `Basisschool: ${data.get("basisschool") || "-"}`,
    "",
    "Contactgegevens ouders:",
    `E-mailadres: ${data.get("emailOuders")}`,
    `Woonadres: ${data.get("woonadres")}`,
    `Telefoonnummer: ${data.get("telefoonOuders") || "-"}`,
    `Ander contact: ${data.get("anderContact") || "-"}`,
    "",
    "Schaakervaring:",
    String(data.get("schaakervaring") || "-"),
    "",
    "Allergieen:",
    String(data.get("allergieen") || "-"),
    "",
    "Dingen die we moeten weten over je kind:",
    String(data.get("kindInfo") || "-"),
    "",
    "Overige informatie:",
    String(data.get("overigeInfo") || "-"),
    "",
    `Nieuwsbrief: ${data.get("nieuwsbrief") || "Nee"}`,
  ].join("\n");

  const mailto = [
    `mailto:${CONTACT_EMAIL}`,
    "?subject=",
    encodeURIComponent(subject),
    "&body=",
    encodeURIComponent(body),
  ].join("");

  window.location.href = mailto;
  formNote.textContent =
    "Je e-mailprogramma is geopend. Controleer de gegevens en verstuur de mail om de inschrijving te voltooien.";
});
