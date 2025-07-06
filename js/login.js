// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");
  
    // Example user credentials for demo purposes
    const demoUser = {
      username: "student123",
      password: "adhdlearn"
    };
  
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from reloading the page
  
      const enteredUsername = document.getElementById("username").value.trim();
      const enteredPassword = document.getElementById("password").value.trim();
  
      // Simple check against hardcoded credentials
      if (enteredUsername === demoUser.username && enteredPassword === demoUser.password) {
        loginMessage.style.color = "green";
        loginMessage.textContent = "Login successful! Redirecting...";
  
        // Simulate redirect after successful login
        setTimeout(() => {
          window.location.href = "/dashboard.html"; // Change this to your main learning page
        }, 1500);
      } else {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Invalid username or password. Please try again.";
      }
    });
  });