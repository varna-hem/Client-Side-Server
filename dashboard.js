<script>
  document.addEventListener("DOMContentLoaded", function () {
    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
      logoutBtn.addEventListener("click", function () {
        // Remove login session
        localStorage.removeItem("loggedInUser");

        // Redirect to login page
        window.location.href = "login.html";
      });
    }
  });
</script>
