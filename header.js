/*
Program Name: main.js
Name: Andres Cortes
Date Created: 05/04/2025
Date Last Edited: 05/04/2025
Version: 1.0
Description: Homework 4 JS
Credits: The skeleton of this JS code is from MISSO. No public link to cite.
*/

// Dynamic Date
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;