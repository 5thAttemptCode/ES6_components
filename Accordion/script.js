const tog = document.querySelectorAll(".toggle");
let activeToggle = null;

for (let i = 0; i < tog.length; i++) {
    tog[i].addEventListener("click", function() {
        const text = this.nextElementSibling;

        // If the clicked toggle is already active, deactivate it and return early.
        if (this === activeToggle) {
            this.classList.remove("active");
            text.classList.remove("active");
            activeToggle = null;
            return;
        }

        // Reset active toggle if one exists.
        if (activeToggle) {
            activeToggle.classList.remove("active");
            activeToggle.nextElementSibling.classList.remove("active");
        }

        // Now set the clicked toggle as active.
        this.classList.add("active");
        text.classList.add("active");

        // Update the activeToggle reference.
        activeToggle = this;
    });
}