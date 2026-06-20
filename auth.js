// Create New Account
function createAccount() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Please enter username and password.");
        return;
    }

    if (localStorage.getItem(username)) {
        alert("Username already exists.");
        return;
    }

    localStorage.setItem(username, password);
    alert("Account Created Successfully!");
}

// Login
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Please enter username and password.");
        return;
    }

    const storedPassword = localStorage.getItem(username);

    if (!storedPassword) {
        alert("User does not exist.");
        return;
    }

    if (storedPassword !== password) {
        alert("Incorrect Password.");
        return;
    }

    localStorage.setItem("currentUser", username);
    window.location.href = "dashboard.html";
}

// Logout
function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}

// Display Current User
function loadUser() {
    const user = localStorage.getItem("currentUser");
    const welcome = document.getElementById("welcomeUser");

    if (user && welcome) {
        welcome.innerText = `Welcome, ${user}!`;
    }
}