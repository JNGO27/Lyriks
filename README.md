# Lyriks

### Application Overview

Lyriks is a music application that allows users to view and listen to songs with their lyrics. The application provides a simple and intuitive interface for searching and streaming music, as well as displaying the lyrics for each song in real-time. It is a one-stop destination for all your music needs, offering a wide range of popular and lesser-known tracks from various artists and genres.

### Application in Action

Visit the application live demo.

https://lyriks-music-jngo27.vercel.app/home

### Built With

This application is built using many in-demand technologies, including Next.js for server-rendered React apps, Redux Toolkit for managing application state, and Styled-Components to use the best bits of ES6 and CSS to style your apps without stress. The application also utilizes the Shazam API to provide music recognition and discovery functionality. These technologies were carefully chosen to provide music lovers with a reliable and user-friendly experience.

- **[Next.js](https://nextjs.org/)** - Next.js is a framework for building server-rendered or statically-exported React apps. It provides a set of tools and conventions for building scalable, high-performance web applications with React.
- **[Redux Toolkit](https://redux-toolkit.js.org/)** - Redux Toolkit is a set of opinionated libraries and utilities for building Redux applications. It provides a simple and easy-to-use API for managing application state, as well as many other helpful utilities and features.
- **[Styled Components](https://styled-components.com/)** - Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!
- **[Shazam API](https://rapidapi.com/tipsters/api/shazam-core/)** - The Shazam API is an API for accessing music recognition and discovery services. It allows developers to integrate Shazam's music recognition technology into their own applications and build new music-related experiences.

### **Getting Started**

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

\***\*Prerequisites\*\***

- git
  If you want to clone the project from GitHub and work with it locally, you will need to have Git installed on your system. You can download and install Git from the official website (**[https://git-scm.com/](https://git-scm.com/)**).
- Node.js
  The application requires Node.js to be installed on your system in order to run. You can download and install the latest version of Node.js from the official website (**[https://nodejs.org/](https://nodejs.org/)**).
- npm (Node Package Manager)
  npm is the package manager for Node.js, and is used to manage the dependencies and packages required for your Next.js project. It is installed automatically when you install Node.js.
  To check if npm is installed on your system, you can open a terminal or command prompt and enter the following command:
  ```bash
  npm -v
  ```

Once you have these prerequisites in place, you can proceed to clone the project from GitHub using Git.

\***\*Installing\*\***

Make sure you have all the necessary prerequisites installed on your system. Follow the below steps to install the setup the project on your machine:

- Open a terminal or command prompt and navigate to the directory where you want to clone the project.
- Run the following command to clone the project from GitHub:
  ```bash
  git clone https://github.com/JNGO27/Lyriks.git
  ```
- This will create a new directory called "Lyriks" in the current location, containing the code for the Lyrics project.
- Navigate to the project directory by running the following command:
  ```bash
  cd Lyriks
  ```
- Run the following command to install the project's dependencies using npm:
  ```bash
  npm install
  ```
- To use the Lyrics project, you must set up some environment variables on your development machine. Here are the steps to follow:
  1. Create a **`.env`** file in the root of the project.
  2. Add the following variables to the **`.env`** file, replacing the placeholder values with your own:
  ```jsx
  NEXT_PUBLIC_SHAZAM_CORE_API_API_KEY=<your-shazam-api-key>
  ```
  1. Save the **`.env`** file.
     This environment variable is required for accessing the RapidAPI Shazam Core API, which is used to retrieve songs and their lyrics, as well as to search for and display top global songs, artists, and charts. Be sure to replace the placeholder value with your API key obtained from the RapidAPI Shazam Core service.
- Once the dependencies are installed, you can run the project locally by running the following command:
  ```bash
  npm start
  ```

This will start the development server and open the Lyrics application in your default web browser.

### Features

- A library of songs and lyrics: Browse and view the lyrics of a large selection of songs from various artists and genres.
- Top songs and artists: A feature that showcases the most popular songs and artists currently trending or historically popular.
- Top Artists: Browse and view the top artists by genre and their top tracks.
- Search functionality: Search for specific songs or artists using keywords.
- Audio playback: Stream or play songs directly
- Mobile responsive: Optimized for use on mobile devices, with a layout and user interface that adjusts and scales appropriately to fit the screen size and resolution of the device being used.

### Contributing

We welcome contributions to Lyrics! If you have an idea for a new feature, an improvement to an existing feature, or a bug fix, please open an issue to discuss it before submitting a pull request. This helps me to review and understand your changes more efficiently.

To contribute code to Lyrics:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Commit your changes to the new branch
4. Open a pull request back to the main repository, including a description of your changes and any relevant issue numbers

Please ensure that your code follows the coding style and standards used in the rest of the project. Thank you for your contribution to Lyriks! We appreciate your efforts to help make this a great music application.
