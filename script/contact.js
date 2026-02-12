document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const toast = document.getElementById("toast");

    function showToast(message, isError = false) {
        toast.textContent = message;
        toast.classList.add("show");

        if (isError) {
            toast.classList.add("error");
        } else {
            toast.classList.remove("error");
        }

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
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
                showToast("Message received successfully!");
                form.reset();
            } else {
                showToast("Something went wrong. Please try again.", true);
            }

        } catch (error) {
            showToast("Network error. Please try again.", true);
        }
    });

});
