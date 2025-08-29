const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme from localStorage (optional)
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggleBtn.textContent = "☀️";
}

// Toggle theme on button click
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Change button icon
    if (body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark"); // save preference
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});
