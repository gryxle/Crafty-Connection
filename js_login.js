const hardcodedUsername = "Louise Yap";
const hardcodedPassword = "12345";

let attempts = 5;

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === hardcodedUsername && password === hardcodedPassword) {
        alert("Login successful! Redirecting to another page.");
        window.location.href = "OS_home.html";
    } else {
        attempts--;
        if (attempts > 0) {
            alert(`Invalid credentials. ${attempts} attempts left.`);
        } else {
            alert("You have exceeded the maximum number of login attempts.");
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.querySelector(".login-btn").disabled = true;
        }
    }
})