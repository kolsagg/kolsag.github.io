// contact.js

document.addEventListener("DOMContentLoaded", function() {
    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Show the success alert
        var alertContainer = document.getElementById("alert-container");
        var successAlert = document.getElementById("success-alert");

        // Show the alert
        alertContainer.style.display = "block";
        successAlert.classList.add("show");

        // Hide the alert after 3 seconds (3000 milliseconds)
        setTimeout(function() {
            successAlert.classList.remove("show");
            alertContainer.style.display = "0";
        }, 2000);
    }

    // Get the form element
    var contactForm = document.getElementById("contact-form");

    // Add event listener for form submission
    contactForm.addEventListener("submit", handleSubmit);
});
