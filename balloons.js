document.addEventListener("DOMContentLoaded", function () {
    const elem = document.getElementById('dob');
    new Datepicker(elem, { autohide: true, format: 'MM-dd' });

    const attentionSeekers = [
        "animate__bounce", "animate__flash", "animate__pulse", "animate__rubberBand",
        "animate__shakeX", "animate__shakeY", "animate__headShake", "animate__swing",
        "animate__tada", "animate__wobble", "animate__jello", "animate__heartBeat"
    ];

    const greeting = document.querySelector("h1.greeting");
    const randomAnimation = attentionSeekers[Math.floor(Math.random() * attentionSeekers.length)];
    greeting.classList.add("animate__animated", randomAnimation);

    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

    document.getElementById('checkbox-card').addEventListener('change', function (e) {
        if (e.target.classList.contains('form-check-input')) {
            const img = document.getElementById(e.target.id + 'Img');
            img.style.visibility = e.target.checked ? "visible" : "hidden";
            img.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
            img.classList.add("animate__animated", e.target.checked ? "animate__bounceInDown" : "animate__bounceOutUp");
        }
    });

    document.getElementById("submit").addEventListener("click", function () {
        const anyChecked = [...document.querySelectorAll(".form-check-input")].some(cb => cb.checked);
        if (!anyChecked) {
            showToast("No balloons selected!", "bg-danger");
        }
    });

    function showToast(message, colorClass) {
        const toastContainer = document.getElementById("toast-container");
        toastContainer.innerHTML = `
            <div id="liveToast" class="toast align-items-center text-white ${colorClass} border-0 show" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex">
                    <div class="toast-body">${message}</div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        `;
        const toastElement = document.getElementById("liveToast");
        const toast = new bootstrap.Toast(toastElement);
        toast.show();
    }

    const toggleAllBtn = document.createElement("button");
    toggleAllBtn.className = "btn btn-outline-secondary mt-3";
    toggleAllBtn.innerText = "Check/Uncheck All";
    document.querySelector(".card-body").appendChild(toggleAllBtn);

    toggleAllBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const checkboxes = document.querySelectorAll(".form-check-input");
        const allChecked = [...checkboxes].every(cb => cb.checked);
        checkboxes.forEach(cb => {
            cb.checked = !allChecked;
            cb.dispatchEvent(new Event("change"));
        });
    });

    document.querySelectorAll(".form-check-label").forEach(label => {
        label.addEventListener("mouseover", function () {
            const color = label.innerText.split(" ")[0].toLowerCase();
            greeting.style.color = color;
        });

        label.addEventListener("mouseout", function () {
            greeting.style.color = "slategray";
        });
    });
});
