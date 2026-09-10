const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const card = button.closest(".card");

        if (card) {
            const pizzaName = card.querySelector("h3").textContent;
            const price = card.querySelector(".price").textContent;

            const message = `Hi! I want to order ${pizzaName} (${price}).`;

            const phoneNumber = "923001234567";

            const whatsappURL =
                `https://wa.me/${923208836309}?text=${encodeURIComponent()}`;

            window.open(whatsappURL, "_blank");
        } else {
            alert("Please contact us to place your order.");
        }

    });
});