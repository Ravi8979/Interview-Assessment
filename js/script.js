document.addEventListener("DOMContentLoaded", function() {
    const enrollButtons = document.querySelectorAll(".btn-primary");

    enrollButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("You have enrolled in " + this.parentElement.querySelector(".card-title").textContent);
        });
    });
});
