// --- ./js/signup.js ---

// Define the core auth logic needed for this page
const USER_KEY = 'currentUser';

function logInUser(username) {
    localStorage.setItem(USER_KEY, username);
    
    // IMPORTANT: Redirect to the home page after login.
    // The home page (index.html) will then execute its own main.js script
    // and run updateHeaderForAuth() on load, displaying the initials.
    window.location.href = 'index.html'; 
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("signupForm");

    // We can expose logInUser globally here too, just in case, but form logic is enough
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const nameInput = document.getElementById("name");
            const passwordInput = document.getElementById("password");
            const confirmPasswordInput = document.getElementById("confirmPassword");
            
            const name = nameInput.value.trim();
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;

            // 1. Password match check
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            // 2. Simple Name check
            if (!name) {
                 alert("Please enter your Full Name.");
                 return;
            }

            // 3. Perform the login using the full name as the identifier
            logInUser(name);
            
            // Optional: Save full user object locally if needed later
            const email = document.getElementById("email").value.trim();
            const fullUser = { name: name, email: email, password: password };
            localStorage.setItem("fullUserDetails", JSON.stringify(fullUser));
        });
    }
});