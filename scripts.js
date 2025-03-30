function toggleForm(form) {
    document.getElementById("login").classList.remove("active");
    document.getElementById("signup").classList.remove("active");

    if (form === "login") {
        document.getElementById("login").classList.add("active");
    } else {
        document.getElementById("signup").classList.add("active");
    }
}

function handleLogin(event) {
    event.preventDefault();
    // Perform validation and login actions here (e.g., API calls)
    alert("Login Successful!");
    window.location.href = "home.html"; // Redirect to home page after login
}

function handleSignup(event) {
    event.preventDefault();
    // Perform signup actions here (e.g., save credentials)
    alert("Signup Successful!");
    toggleForm("login"); // Automatically go to login form after signup
}
