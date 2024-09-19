import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/swiperReviews.css";

import starSrc from "../images/star.svg";

import userPhoto1 from "../images/review-sophia.svg";
import userPhoto2 from "../images/review-james.svg";
import userPhoto3 from "../images/review-fatima.svg";
import userPhoto4 from "../images/review-michael.svg";
import userPhoto5 from "../images/review-david.svg";
import userPhoto6 from "../images/review-alisha.svg";
import userPhoto7 from "../images/review-emily.svg";
import userPhoto8 from "../images/review-mohammed.svg";

import nextIconSrc from "../images/arrow-rigth.svg";
import prevIconSrc from "../images/arrow-left.svg";

export function createReviewSlider() {
  const sliderContainer = document.createElement("div");
  sliderContainer.className = "swiper-container";

  const title = document.createElement("h2");
  title.textContent = "Trusted by people";
  title.className = "sliderTitle";
  sliderContainer.appendChild(title);

  const wrapper = document.createElement("div");
  wrapper.className = "swiper-wrapper";

  const reviews = [
    {
      text: "“I recently used SKAIWAY for a corporate event, and I can’t express how impressed I was with their service. The Tesla arrived exactly on time, and the driver was incredibly professional. The ride was smooth and luxurious, and I felt like a VIP the whole way. The app was easy to use, and booking my ride was great. Highly recommend for anyone looking for the best chauffeur services.”",
      author: "Sophia",
      position: "Managing Director",
      date: "10.04.2024",
      photo: userPhoto1,
    },
    {
      text: "“From start to finish, my experience with SKAIWAY was exceptional. I booked a ride with their Lexus ES300 hybrid for an important meeting, and the car was excellent! The fact that they focus on offering luxury service. The driver was professional, and polite, and went out of his way to ensure I had a comfortable ride. Worth it.”",
      author: "James T",
      position: "Team Lead",
      date: "16.04.2024",
      photo: userPhoto2,
    },
    {
      text: "“SKAIWAY has the best luxury transportation for me! I booked a trip to the airport using their app, and I was thoroughly impressed. The GMC Yukon was stunning – spacious and incredibly comfortable. My driver arrived on time and was very personable, making the ride enjoyable. I’ve tried other services, but none compare to the quality that SKAIWAY provides. I’ll definitely be using them again.”",
      author: "Fatima Rami",
      position: "Analyst",
      date: "03.05.2024",
      photo: userPhoto3,
    },
    {
      text: "“SKAIWAY exceeded my expectations! The GMC Yukon was comfortable, which made my family trip around UAE a delightful experience. The driver was professional and knowledgeable about the area, ensuring we got to our destinations on time. Booking through their app was easy, and I felt 100% satisfied with their service. Highly recommend.”",
      author: "Michael H",
      position: "Compliance Officer",
      date: "11.05.2024",
      photo: userPhoto4,
    },
    {
      text: "“Choosing SKAIWAY for my airport transfer was one of the best decisions I made during my last trip to the UAE. The app was simple and easy, and the option to choose a luxurious vehicle was a major plus. The driver arrived right on schedule in Tesla and took care of my luggage without hesitation. The ride was smooth and comfortable, and I arrived at my destination feeling relaxed. This service is everything they claim it to be and more.”",
      author: "David K",
      position: "Risk Manager",
      date: "23.05.2024",
      photo: userPhoto5,
    },
    {
      text: "“I cannot stress enough how fantastic SKAIWAY is! I took a ride to Abu Dhabi in the Lexus ES300, and it felt like I was in an incredible journey. The driver was incredibly polite and attentive, and the vehicle itself was comfy. SKAIWAY truly offers a unique service. I felt like royalty during my ride, and I will definitely recommend them to all my friends.”",
      author: "Aisha Manil",
      position: "Supervisor",
      date: "03.06.2024",
      photo: userPhoto6,
    },
    {
      text: "“My family and I went to the Ras Al Khaimah for vacation, and we decided to use SKAIWAY for our transportation. From the moment we booked, everything was seamless. The GMC Yukon has fitted our luggage perfectly. Our chauffeur, Samir, was polite and made the drive enjoyable. I loved everything in service. Every ride was prompt and comfortable. A fantastic experience all around, thanks SKAIWAY.”",
      author: "Emily R",
      position: "Chief Technology Officer",
      date: "16.06.2024",
      photo: userPhoto7,
    },
    {
      text: "“I rely on SKAIWAY for my scheduling for any meeting from Dubai to Abu Dhabi, and it’s always a delight. Their 100% satisfaction guarantee is no joke! Every time I book through their app, the service is amazing. Whether it’s the luxury of the Lexus or the smoothness of the Tesla, I am never disappointed. They consistently go above and beyond, providing not just transportation but an experience. Thank you for setting the bar so high in chauffeured services.”",
      author: "Mohammed A",
      position: "Engineer",
      date: "30.06.2024",
      photo: userPhoto8,
    },
  ];

  reviews.forEach((review) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    const profileContainer = document.createElement("div");
    profileContainer.className = "profileContainer";

    const photo = document.createElement("img");
    photo.src = review.photo;
    photo.alt = `${review.author}'s photo`;
    photo.className = "userPhoto";

    const userInfo = document.createElement("div");
    userInfo.className = "userInfo";
    const name = document.createElement("h4");
    name.textContent = review.author;
    const position = document.createElement("p");
    position.textContent = review.position;
    userInfo.appendChild(name);
    userInfo.appendChild(position);

    profileContainer.appendChild(photo);
    profileContainer.appendChild(userInfo);

    const dateRatingContainer = document.createElement("div");
    dateRatingContainer.className = "dateRatingContainer";

    const date = document.createElement("p");
    date.className = "reviewDate";
    date.textContent = review.date;

    const rating = document.createElement("div");
    rating.className = "rating";
    for (let i = 0; i < 5; i++) {
      const star = document.createElement("img");
      star.src = starSrc;
      star.alt = "Star";
      star.className = "star";
      rating.appendChild(star);
    }

    dateRatingContainer.appendChild(rating);
    dateRatingContainer.appendChild(date);

    const blockquote = document.createElement("blockquote");
    const p = document.createElement("p");
    p.textContent = review.text;
    p.className = "reviewText";
    blockquote.appendChild(p);

    slide.appendChild(profileContainer);
    slide.appendChild(dateRatingContainer);
    slide.appendChild(blockquote);
    wrapper.appendChild(slide);
  });

  sliderContainer.appendChild(wrapper);

  const navigationContainer = document.createElement("div");
  navigationContainer.className = "swiper-navigation";

  const nextButton = document.createElement("div");
  nextButton.className = "swiper-button-next";

  const nextIcon = document.createElement("img");
  nextIcon.src = nextIconSrc;
  nextIcon.alt = "Next";
  nextButton.appendChild(nextIcon);

  navigationContainer.appendChild(nextButton);

  const prevButton = document.createElement("div");
  prevButton.className = "swiper-button-prev";

  const prevIcon = document.createElement("img");
  prevIcon.src = prevIconSrc;
  prevIcon.alt = "Prev";
  prevButton.appendChild(prevIcon);

  navigationContainer.appendChild(prevButton);

  sliderContainer.appendChild(navigationContainer);

  document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      modules: [Navigation],
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },
    });
  });

  return sliderContainer;
}
