
document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("theme-button");

    if (!themeButton) {
        console.error("Theme button not found!");
        return;
    }

    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");

        const isLightMode =
            document.body.classList.contains("light-theme");

        themeButton.textContent = isLightMode
            ? "Dark Mode"
            : "Light Mode";
    });
});
