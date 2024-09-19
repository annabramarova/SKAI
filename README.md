Review Slider Component
This project is a fully functional review slider component built using Swiper.js. It displays user reviews with a flexible design and works across different screen sizes. The component includes navigation buttons and dynamically loads user reviews into the slider.

Features
Responsive design with 2 slides per view on larger screens and 1 slide per view on mobile devices.
Smooth navigation with looping and custom navigation buttons.
Dynamically loaded reviews from a JSON-like array.
Displaying user information such as name, position, date, and rating (fixed 5-star rating).
Integration of SVG icons for stars and navigation arrows.
Prerequisites
Make sure you have the following installed on your system:

Node.js and npm (for installing dependencies)
Webpack (for bundling and compiling assets)
Getting Started

1. Clone the Repository
   bash
   Копировать код
   git clone https://github.com/your-username/review-slider.git
   cd review-slider
2. Install Dependencies
   Use npm to install the required dependencies:

bash
Копировать код
npm install 3. Project Structure
The project is structured as follows:

bash
Копировать код
/src
/images # Contains user images, star icon, and navigation arrows.
/styles # Contains CSS styles for Swiper.js and custom components.
/js # Contains the Swiper.js integration code.
sliderReviews.js # Main JS file for creating and configuring the review slider.

/dist
/css # Compiled CSS files.
/js # Compiled JS files.
/images # Compiled images and assets. 4. Running the Project
To run the project in development mode:

bash
Копировать код
npm run start
This will compile the assets and start a local development server.

5. Building for Production
   To build the project for production:

bash
Копировать код
npm run build
This will compile the JavaScript and CSS files into the /dist folder.

6. Using the Review Slider Component
   To create and render the review slider, use the createReviewSlider function from sliderReviews.js in your main application file.

js
Копировать код
import { createReviewSlider } from "./js/sliderReviews";

document.body.appendChild(createReviewSlider());
The createReviewSlider function dynamically builds the slider with all the necessary components.

7. Customization
   You can customize the following aspects:

Review Content: Modify the reviews array in the sliderReviews.js file to add or change the review data.
CSS Styling: Modify the styles in swiperReviews.css for layout changes, fonts, and colors.
SVG Icons: Replace the star and navigation icons in the /src/images/ folder with custom SVG files if necessary.
Dependencies
Swiper.js for the review slider functionality.
Webpack for bundling the assets.
License
This project is licensed under the MIT License.

Developed by Anna Bramarova.
