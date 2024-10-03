// Function to switch to the login form
function showLogin() {
    document.getElementById("loginForm").classList.add("active");
    document.getElementById("signupForm").classList.remove("active");
    document.getElementById("loginBtn").classList.add("active");
    document.getElementById("signupBtn").classList.remove("active");
}

// Function to switch to the signup form
function showSignup() {
    document.getElementById("signupForm").classList.add("active");
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("signupBtn").classList.add("active");
    document.getElementById("loginBtn").classList.remove("active");
}

// Set default form to login
document.getElementById("loginForm").classList.add("active");
document.getElementById("loginBtn").classList.add("active");

// Mock storage to simulate user data
const users = {};

// Function to handle login
function login(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (users[email] && users[email] === password) {
        alert("Login successful!");
        clearForm();
    } else {
        alert("Login failed. Please check your email or password.");
    }
}

// Function to handle signup
function signup(event) {
    event.preventDefault();
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (!users[email]) {
        users[email] = password;
        alert(`Signup successful! Welcome, ${username}!`);
        showLogin();
        clearForm();
    } else {
        alert("Email already registered. Try logging in.");
    }
}

// Function to clear the input fields after form submission
function clearForm() {
    document.querySelectorAll('input').forEach(input => input.value = '');
}

