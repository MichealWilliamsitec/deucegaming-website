
/*
Author: Michael Williams
Project: JavaScript Form Validation
Website: DeuceGaming
*/

// Select the feedback form
const form = document.getElementById("feedbackForm");

// Run JavaScript when the form is submitted
form.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get user input
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Get error message elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    // Clear old messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    // Remove previous error borders
    name.classList.remove("input-error");
    email.classList.remove("input-error");
    message.classList.remove("input-error");

    let isValid = true;

    // Validate name
    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        name.classList.add("input-error");
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        email.classList.add("input-error");
        isValid = false;
    }
    else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email.";
        email.classList.add("input-error");
        isValid = false;
    }

    // Validate message
    if (message.value.trim() === "") {
        messageError.textContent = "Please enter a message.";
        message.classList.add("input-error");
        isValid = false;
    }

    // Show success message if all fields are valid
    if (isValid) {
        successMessage.textContent =
            "Success! Your form passed validation.";

        form.reset();
    }
});
