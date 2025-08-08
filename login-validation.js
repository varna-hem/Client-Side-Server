document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const toast = document.getElementById("toast");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      // 🚫 Check for empty fields
      if (!email || !password) {
        showToast("Please fill in both email and password.");
        return;
      }

      // 📧 Email format validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/;
      if (!emailPattern.test(email)) {
        showToast("Please enter a valid email address.");
        return;
      }

      // ✅ Dummy login logic (replace with real backend check if needed)
      if (email === "user@example.com" && password === "123456") {
        localStorage.setItem("isLoggedIn", "true");
        showToast("Login successful!");

        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 1500); // ✅ Delay to show toast
      } else {
        showToast("Invalid email or password.");
      }
    });
  }

  // ✅ Toast function
  function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
});
