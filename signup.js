const form = document.getElementById("signupForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!name || !email || !password || !confirmPassword) {
    showToast("Please fill all fields", "error");
    return;
  }

  if (password !== confirmPassword) {
    showToast("Passwords do not match", "error");
    return;
  }

  // Simulate success
  showToast("Account created successfully!", "success");

  // Redirect to login page after short delay
  setTimeout(() => {
    window.location.href = "login.html";  // or "login.html" if that’s your login file
  }, 2000); // 2 second delay
});

function showToast(message, type) {
  toast.textContent = message;
  toast.style.background = type === "success" ? "#4caf50" : "#e74c3c";
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
}
