const CONTACT_EMAIL = "Mokummeesters@gmail.com";

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const signupForm = document.querySelector("#signup-form");
const formNote = document.querySelector("#form-note");
const birthDateInput = signupForm?.querySelector('input[name="geboortedatum"]');
const isEnglish = document.documentElement.lang === "en";

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

function openMailto(mailto) {
  const link = document.createElement("a");
  link.href = mailto;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

signupForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!signupForm.reportValidity()) {
    return;
  }

  const data = new FormData(signupForm);
  const subject = isEnglish ? "Mokum Meesters registration" : "Inschrijving Mokum Meesters";
  const body = [
    isEnglish
      ? "New registration via mokummeesters.nl"
      : "Nieuwe inschrijving via mokummeesters.nl",
    "",
    `${isEnglish ? "Child's name" : "Naam kind"}: ${data.get("naamKind")}`,
    `${isEnglish ? "Date of birth" : "Geboortedatum"}: ${data.get("geboortedatum")}`,
    `${isEnglish ? "Camp week" : "Kampweek"}: ${data.get("kampweek") || "-"}`,
    `${isEnglish ? "Primary school" : "Basisschool"}: ${data.get("basisschool") || "-"}`,
    `${isEnglish ? "Chess club" : "Schaakclub"}: ${data.get("schaakclub") || "-"}`,
    "",
    isEnglish ? "Parent contact details:" : "Contactgegevens ouders:",
    `${isEnglish ? "Email address" : "E-mailadres"}: ${data.get("emailOuders")}`,
    `${isEnglish ? "Home address" : "Woonadres"}: ${data.get("woonadres")}`,
    `${isEnglish ? "Phone number" : "Telefoonnummer"}: ${data.get("telefoonOuders") || "-"}`,
    `${isEnglish ? "Other contact" : "Ander contact"}: ${data.get("anderContact") || "-"}`,
    "",
    isEnglish ? "Chess experience:" : "Schaakervaring:",
    String(data.get("schaakervaring") || "-"),
    "",
    isEnglish ? "Allergies:" : "Allergieen:",
    String(data.get("allergieen") || "-"),
    "",
    isEnglish
      ? "Things we should know about your child:"
      : "Dingen die we moeten weten over je kind:",
    String(data.get("kindInfo") || "-"),
    "",
    isEnglish ? "Other information:" : "Overige informatie:",
    String(data.get("overigeInfo") || "-"),
    "",
    `${isEnglish ? "Newsletter" : "Nieuwsbrief"}: ${data.get("nieuwsbrief") || (isEnglish ? "No" : "Nee")}`,
    `${isEnglish ? "Agreed to terms and privacy statement" : "Akkoord algemene voorwaarden en privacyverklaring"}: ${
      data.get("akkoordVoorwaarden") || (isEnglish ? "No" : "Nee")
    }`,
  ].join("\n");

  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  openMailto(mailto);

  formNote.textContent = isEnglish
    ? `Your email programme should open now. Check the details and send the email to complete the registration. If nothing happens, email ${CONTACT_EMAIL} manually.`
    : `Je e-mailprogramma zou nu moeten openen. Controleer de gegevens en verstuur de mail om de inschrijving te voltooien. Gebeurt er niets? Stuur de gegevens dan handmatig naar ${CONTACT_EMAIL}.`;
});

birthDateInput?.addEventListener("input", () => {
  birthDateInput.setCustomValidity("");

  if (!birthDateInput.validity.rangeUnderflow && !birthDateInput.validity.rangeOverflow) {
    return;
  }

  birthDateInput.setCustomValidity(
    isEnglish
      ? "Registration is only possible for children born between 2014 and 2019."
      : "Inschrijven kan alleen voor kinderen geboren tussen 2014 en 2019.",
  );
});
