document.addEventListener("DOMContentLoaded", function () {
    const chatbox = document.getElementById("chatbox");
    const userInput = document.getElementById("user-input");

    function sendMessage() {
        let userText = userInput.value.trim();

        if (userText === "") return;

        displayMessage("You: " + userText, "user");

        let botResponse = getBotResponse(userText);
        setTimeout(() => {
            displayMessage("AI Doctor: " + botResponse, "bot");
        }, 1000);

        userInput.value = "";
    }

    function displayMessage(text, sender) {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.innerText = text;
        chatbox.appendChild(messageDiv);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    function getBotResponse(userText) {
        userText = userText.toLowerCase();

        if (userText.includes("fever")) {
            return "You may have a viral infection. Drink fluids and rest. Would you like to book a doctor?";
        } else if (userText.includes("headache")) {
            return "Headaches can be caused by stress or dehydration. Try drinking water and resting.";
        } else if (userText.includes("cough")) {
            return "A cough can be due to cold, allergies, or infection. If severe, consult a doctor.";
        } else if (userText.includes("stomach pain")) {
            return "It could be due to indigestion or infection. Try drinking warm water and resting.";
        } else {
            return "I'm not sure. Please provide more symptoms or book an appointment with a doctor.";
        }
    }

    document.querySelector("#chatbot button").addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") sendMessage();
    });
});
