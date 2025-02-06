document.addEventListener("DOMContentLoaded", function () {
    const toastEl = document.getElementById("liveToast");
    const toastBody = toastEl.querySelector(".toast-body");
    const toastTitle = toastEl.querySelector(".me-auto");
    const toastBootstrap = new bootstrap.Toast(toastEl, { autohide: false });
    document.getElementById("discount-row").addEventListener("click", function (event) {
        if (event.target.classList.contains("discount")) {
            event.preventDefault();
            const product = event.target.dataset.product || "Unknown Product";
            const discountCode = "SAVE12.5";
            
            toastTitle.textContent = product;
            toastBody.textContent = `Discount Code: ${discountCode}`;
            toastBootstrap.show();
        }
    });
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            toastBootstrap.hide();
        }
    });
});

