document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const msg = document.getElementById("signupMsg");

  if (password !== confirmPassword) {
    msg.style.color = "red";
    msg.textContent = "Passwords do not match!";
    return;
  }

  const user = {
    name,
    email,
    password
  };

  localStorage.setItem("user_" + email, JSON.stringify(user));

  msg.style.color = "green";
  msg.textContent = "Sign up successful! Redirecting...";

  document.getElementById("signupForm").reset();

  // Redirect to ADHD check page after 1 second
  setTimeout(() => {
    window.location.href = "adhd-check.html";
  }, 1000);
});