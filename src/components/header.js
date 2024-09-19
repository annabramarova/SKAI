import "../styles/header.css";
import logoSrc from "../images/logo.svg";

export function createHeader() {
  const header = document.createElement("header");
  const logo = document.createElement("img");
  const languageAndContactContainer = document.createElement("div");
  const languageSwitcher = document.createElement("select");
  const contactButton = document.createElement("a");

  logo.src = logoSrc;
  logo.alt = "Logo";
  logo.className = "headerLogo";

  languageSwitcher.className = "languageSwitcher";
  const optionEn = document.createElement("option");
  optionEn.value = "en";
  optionEn.textContent = "English";
  const optionRu = document.createElement("option");
  optionRu.value = "ru";
  optionRu.textContent = "Русский";
  languageSwitcher.appendChild(optionEn);
  languageSwitcher.appendChild(optionRu);

  contactButton.href = "#contactForm";
  contactButton.textContent = "call back";
  contactButton.className = "contactButton";

  languageAndContactContainer.className = "languageAndContactContainer";
  languageAndContactContainer.appendChild(languageSwitcher);
  languageAndContactContainer.appendChild(contactButton);

  header.appendChild(logo);
  header.appendChild(languageAndContactContainer);

  return header;
}
