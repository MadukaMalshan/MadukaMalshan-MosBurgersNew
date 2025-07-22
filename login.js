function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const msg = document.getElementById("loginMsg");

    if (username === "maduka123" && password === "1234") {
        msg.style.color = "#388e3c";
        msg.textContent = "Login successful!";
        // Redirect or further logic can go here
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    } else {
        msg.style.color = "#d32f2f";
        msg.textContent = "Invalid username or password.";
    }
    return false;
}
