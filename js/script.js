document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-sidebar");
    const sidebar = document.getElementById("sidebar");

    toggleButton.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
});
