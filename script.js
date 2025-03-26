document.addEventListener("DOMContentLoaded", function () {
    // Appointment Booking Form
    const form = document.getElementById("appointment-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const specialization = document.getElementById("specialization").value;
            const resultDiv = document.getElementById("appointment-result");

            if (name.trim() === "") {
                resultDiv.innerHTML = `<p style="color: red;">Please enter your name.</p>`;
                return;
            }

            let doctor;
            switch (specialization) {
                case "general":
                    doctor = "Dr. Smith (General Physician)";
                    break;
                case "cardio":
                    doctor = "Dr. Johnson (Cardiologist)";
                    break;
                case "derma":
                    doctor = "Dr. Patel (Dermatologist)";
                    break;
                default:
                    doctor = "a Specialist";
            }

            resultDiv.innerHTML = `<p style="color: green;">Appointment confirmed with ${doctor} for ${name}.</p>`;
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            const resultDiv = document.getElementById("form-result");

            if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
                resultDiv.innerHTML = `<p style="color: red;">Please fill in all fields.</p>`;
                return;
            }

            resultDiv.innerHTML = `<p style="color: green;">Thank you, ${name}. Your message has been sent!</p>`;
            contactForm.reset();
        });
    }
});
