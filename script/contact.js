document.addEventListener("DOMContentLoaded", function () {

    console.log("Contact script loaded");

    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    if (!form) {
        console.error("Form not found");
        return;
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                responseMessage.style.display = "block";
                responseMessage.style.color = "green";
                responseMessage.innerText = "Thank you! Your message has been sent successfully.";
                form.reset();
            } else {
                responseMessage.style.display = "block";
                responseMessage.style.color = "red";
                responseMessage.innerText = "Oops! Something went wrong. Please try again.";
            }

        } catch (error) {
            console.error(error);
            responseMessage.style.display = "block";
            responseMessage.style.color = "red";
            responseMessage.innerText = "Network error. Please try again.";
        }
    });

});
