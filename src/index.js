import "./styles/common.css";
import { createHeader } from "./components/header.js";
import { createHero } from "./components/hero.js";
import { createReviewSlider } from "./components/sliderReviews.js";
import { createFooter } from "./components/footer.js";

const container = document.createElement("div");
container.className = "container";

container.appendChild(createHeader());
container.appendChild(createHero());
container.appendChild(createReviewSlider());
container.appendChild(createFooter());

document.body.appendChild(container);
