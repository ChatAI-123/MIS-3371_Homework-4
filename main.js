/*
Program Name: main.js
Name: Andres Cortes
Date Created: 02/05/2025
Date Last Edited: 03/09/2025
Version: 2.1
Description: Homework 2 JS
Credits: The skeleton of this JS code is from MISSO. No public link to cite.
*/

// Dynamic Date
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;