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

// Name Slider Value
let slider = document.getElementById("visitSatisfactionRating");
let output = document.getElementById("rating-slider");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
};

// Field Validation Functions
// First Name Validation
function validateFname() {
    const fname = document.getElementById("firstName").value;
    if (fname.length === 0) {
        document.getElementById("fname-error").innerHTML = 
        "First name can't be blank";
        return false;
    }
    let regex = /^[a-zA-Z']{1,30}$/;
    if (!regex.test(fname)) {
        document.getElementById("fname-error").innerHTML = 
        "First name can only contain letters and apostrophes";
        return false;
    }
    document.getElementById("fname-error").innerHTML = "";
    return true;
}

// Middle Inital Validation
function validateMI() {
    const mini = document.getElementById("middleInitial").value;
    let regex = /^[a-zA-Z]$/;
    
    if (mini.length > 0 && !regex.test(mini)) {
        document.getElementById("mini-error").innerHTML = 
        "Middle initial must be a single letter";
        return false;
    }
    document.getElementById("mini-error").innerHTML = "";
    return true;
}

// Last Name Validation
function validateLname() {
    const lname = document.getElementById("lastName").value;
    if (lname.length === 0) {
        document.getElementById("lname-error").innerHTML = 
        "Last name can't be blank";
        return false;
    }
    let regex = /^[a-zA-Z']{1,30}$/;
    if (!regex.test(lname)) {
        document.getElementById("lname-error").innerHTML = 
        "Last name can only contain letters and apostrophes";
        return false;
    }
    document.getElementById("lname-error").innerHTML = "";
    return true;
}

// DOB Validation
function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

// SSN Validation
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^\d{3}-?\d{2}-?\d{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid SSN (XXX-XX-XXXX)";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

// Address Validation
function validateAddress1() {
    const address = document.getElementById("address1").value;
    if (address.length < 2) {
        document.getElementById("address1-error").innerHTML = 
        "Address must be at least 2 characters";
        return false;
    }
    if (address.length > 30) {
        document.getElementById("address1-error").innerHTML = 
        "Address cannot exceed 30 characters";
        return false;
    }
    document.getElementById("address1-error").innerHTML = "";
    return true;
}

// City Validation
function validateCity() {
    const city = document.getElementById("city").value;
    let regex = /^[A-Za-z\s\-']+$/;
    if (!regex.test(city)) {
        document.getElementById("city-error").innerHTML = 
        "City can only contain letters, spaces, hyphens and apostrophes";
        return false;
    }
    document.getElementById("city-error").innerHTML = "";
    return true;
}

// Zip Validation
function validateZcode() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value;

    if (!zip) {
        document.getElementById("zcode-error").innerHTML = 
        "Zip code can't be blank";
        return false;
    }

    // Check for invalid characters
    if (!/^[\d-]+$/.test(zip)) {
        document.getElementById("zcode-error").innerHTML = 
        "Zip code can only contain numbers and hyphens";
        return false;
    }

    // Format validation 
    if (!/^\d{5}(-\d{4})?$/.test(zip)) {
        document.getElementById("zcode-error").innerHTML = 
        "Please enter a valid 5-digit ZIP code or ZIP+4 format (12345 or 12345-6789)";
        return false;
    }

    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

// Email Validation
function validateEmail() {
    const email = document.getElementById("email").value;
    const emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email) {
        document.getElementById("email-error").innerHTML = 
        "Email can't be blank";
        return false;
    }
    if (!emailR.test(email)) {
        document.getElementById("email-error").innerHTML = 
        "Please enter a valid email address";
        return false;
    }
    document.getElementById("email-error").innerHTML = "";
    return true;
}

// Phone Validation
function validatePhone() {
    const phone = document.getElementById("phone");
    let phoneNum = phone.value.replace(/[^\d]/g, "");
    
    if (!phoneNum) {
        document.getElementById("phone-error").innerHTML = 
        "Phone number can't be blank";
        return false;
    }
    
    if (phoneNum.length === 10) {
        phone.value = phoneNum.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
        document.getElementById("phone-error").innerHTML = "";
        return true;
    }
    
    document.getElementById("phone-error").innerHTML = 
    "Please enter a valid phone number";
    return false;
}

// Username Validation
function validateUsername() {
    const username = document.getElementById("usernameID").value.toLowerCase();
    const email = document.getElementById("email").value.toLowerCase();
    document.getElementById("usernameID").value = username;
    
    if (username === email) {
        document.getElementById("username-error").innerHTML = 
        "Username cannot be the same as email address";
        return false;
    }
    
    if (username.length < 5) {
        document.getElementById("username-error").innerHTML = 
        "Username must be at least 5 characters";
        return false;
    }
    if (username.length > 20) {
        document.getElementById("username-error").innerHTML = 
        "Username cannot exceed 20 characters";
        return false;
    }
    let regex = /^[a-z][a-z0-9_-]*$/;
    if (!regex.test(username)) {
        document.getElementById("username-error").innerHTML = 
        "Username must start with a letter and can only contain letters, numbers, underscores, and hyphens";
        return false;
    }
    document.getElementById("username-error").innerHTML = "";
    return true;
}

// Password Validation
function validatePassword() {
    const password = document.getElementById("password").value;
    const username = document.getElementById("usernameID").value;
    let errorMessage = [];
    
    if (password.length < 10) {
        errorMessage.push("Password must be at least 10 characters");
    }
    if (!password.match(/[a-z]/)) {
        errorMessage.push("Include a lowercase letter");
    }
    if (!password.match(/[A-Z]/)) {
        errorMessage.push("Include an uppercase letter");
    }
    if (!password.match(/[0-9]/)) {
        errorMessage.push("Include a number");
    }
    if (!password.match(/[!@#$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Include a special character");
    }
    if (password.includes(username)) {
        errorMessage.push("Password cannot contain username");
    }
    
    document.getElementById("password-error").innerHTML = 
        errorMessage.join("<br>");
    return errorMessage.length === 0;
}

// Confirm Password Validation
function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirmPassword").value;
    
    if (password !== confirmPass) {
        document.getElementById("confirm-password-error").innerHTML = 
        "Passwords do not match";
        return false;
    }
    document.getElementById("confirm-password-error").innerHTML = "";
    return true;
}

// Error Check Function
function errorCheck() {
    validateFname()
    validateMI()
    validateLname()
    validateDob()
    validateSsn()
    validateAddress1()
    validateCity()
    validateZcode()
    validateEmail()
    validatePhone()
    validateUsername()
    validatePassword()
    validateConfirmPassword()
}

// Review Input Function
function reviewInput() {
    var formContent = document.getElementById("signup");
    var formOutput = "<table class='output'><th colspan='100'>Review Your Information:</th>";
    
    if (document.getElementById("showInput").innerHTML === "") {
        for (let i = 0; i < formContent.length; i++) {
            let dataType = formContent.elements[i].type;
            let attribute = formContent.elements[i].name;
            let value = formContent.elements[i].value;

            if (formContent.elements[i].value !== "") {
                switch (dataType) {
                    case "button":
                    case "submit":
                    case "reset":
                        break;
                    case "checkbox":
                        if (formContent.elements[i].checked) {
                            formOutput += `<tr><td class='td1 td1Review'>${attribute}</td><td>&#x2713;</td></tr>`;
                        }
                        break;
                    case "radio":
                        if (formContent.elements[i].checked) {
                            formOutput += `<tr><td class='td1 td1Review'>${attribute}</td><td>${value}</td></tr>`;
                        }
                        break;
                    case "password":
                        formOutput += `<tr><td class='td1 td1Review'>${attribute}</td><td>********</td></tr>`;
                        break;
                    default:
                        formOutput += `<tr><td class='td1 td1Review'>${attribute}</td><td>${value}</td></tr>`;
                }
            }
        }
        formOutput += "</table>";
        document.getElementById("showInput").innerHTML = formOutput;
    } else {
        document.getElementById("showInput").innerHTML = "";
    }
}