# Dynamic Squares Application
## About the Project
This project is a simple, interactive interface application built with React that changes the state of squares when they are clicked. The user interface has four squares, and when they are clicked, their colors change according to the following logic:
* Click: When a square is clicked, it turns green.
* Second Click: When a green square is clicked again, it reverts to its original color.
This application practically demonstrates fundamental React concepts such as state management (useState), prop usage, and event handling (onClick).
## Proje Yapısı
* Kareler.js: The main component of the application. It manages the state of the squares, creates each square, and handles click events.
* index.css: Defines the general styles for the squares and the page. The active class is used to make the squares turn green.
* index.html: Contains the basic HTML structure of the application.
## Nasıl Çalıştırılır?
To run this project on your local machine, you need to have Node.js and npm installed.
1. Install Required Packages: In your project folder's terminal, run the following command to install the necessary dependencies:
```
Bash
npm install
```
2. Start the Application: After the dependencies are installed, use the following command to start the application in development mode:
```
Bash
npm run dev
```
3. View in Browser: Once the command is run, your project will typically open automatically at http://localhost:5173. If it doesn't, you can manually type this address into your browser's address bar to view it.
## Learning Outcomes
By exploring or working on this project, you can gain experience in the following areas:
* You'll learn how to manage component state using the useState hook to keep track of a selected item. In this project, kareId is used to store the ID of the currently active square, and state holds the list of all squares.
* You'll learn how to dynamically apply CSS classes based on state. The classAdiAl function checks if a square's ID matches the active kareId and returns the active class if it does. This changes the square's appearance, as defined in index.css.
* You'll understand how to handle user events in React, specifically with the onClick event handler. The aktifEt function toggles the active state of a square, setting kareId to the clicked square's ID or an empty string if it's already active.
* You'll learn how to render a list of components dynamically using the map method. The Kareler component maps over the state array to create and display a div for each square, assigning a unique key and data-testid to each one.
* You'll learn how to use a basic CSS Grid layout. The squares container uses display: grid with grid-template-columns and grid-template-rows to arrange the squares in a 2x2 layout with a gap between them.
