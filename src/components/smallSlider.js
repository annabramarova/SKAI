import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.min.css";

export function createSmallSlider() {
  const sliderContainer = document.createElement("div");
  sliderContainer.className = "smallSliderContainer";

  const wrapper = document.createElement("div");
  wrapper.className = "smallSliderWrapper";

  // Add images to the slider
  const images = [
    "path/to/image1.jpg",
    "path/to/image2.jpg",
    "path/to/image3.jpg",
  ];

  images.forEach((imageSrc) => {
    const slide = document.createElement("div");
    slide.className = "smallSliderSlide";
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = "Slider image";
    slide.appendChild(img);
    wrapper.appendChild(slide);
  });

  sliderContainer.appendChild(wrapper);

  new Swiper(".smallSliderContainer", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  return sliderContainer;
}
