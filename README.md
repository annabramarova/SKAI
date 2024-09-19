# Review Slider

A responsive review slider component built with Swiper.js. It showcases user reviews in a stylish and interactive carousel format.

## Features

- Displays user reviews in a carousel.
- Shows 2 reviews at a time on tablets and desktops, and 1 review on mobile devices.
- Customizable navigation buttons.

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed. You can check if it's installed and its version by running:

```bash
node -v
```

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**

   Install the required npm packages:

   ```bash
   npm install
   ```

   This will install the following dependencies:

   - `swiper`: For the carousel functionality.
   - Other dependencies defined in `package.json`.

3. **Add assets:**

   Place your SVG icons and images in the `images` directory. Ensure that the paths to these assets in your JavaScript and CSS files are correct.

## Usage

1. **Build and Start the Development Server:**

   You can use a tool like `webpack` to bundle your assets and run a development server. If you have a `webpack` configuration file (`webpack.config.js`), you can start the server with:

   ```bash
   npm start
   ```

   This command will build your project and serve it on a local server. The default URL is usually `http://localhost:8080`, but check your `webpack` configuration for the exact URL.
