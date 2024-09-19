import "../styles/hero.css";
import { createOrderForm } from "./orderForm.js";

export function createHero() {
  const hero = document.createElement("section");
  hero.className = "hero";

  // Create background
  const background = document.createElement("div");
  background.className = "heroBackground";

  // Create hero content container
  const heroContent = document.createElement("div");
  heroContent.className = "heroContent";

  // Create and add the header
  const header = document.createElement("div");
  header.className = "heroTitle";

  // Create header parts
  const part1 = document.createElement("div");
  part1.className = "heroTitlePart";
  part1.textContent = "Your global";
  const part2 = document.createElement("div");
  part2.className = "heroTitlePart";
  part2.textContent = "chauffeur";
  const part3 = document.createElement("div");
  part3.className = "heroTitlePart";
  part3.textContent = "service";

  // Append parts to header
  header.appendChild(part1);
  header.appendChild(part2);
  header.appendChild(part3);

  // Add order form
  const orderForm = createOrderForm();

  // Append header and order form to hero content

  heroContent.appendChild(header);
  heroContent.appendChild(orderForm);

  hero.appendChild(background);
  hero.appendChild(heroContent);

  return hero;
}
