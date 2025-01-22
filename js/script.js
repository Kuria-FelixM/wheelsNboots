// Toggle Sidebar Visibility
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
  }
  
  // Hide Sidebar When Clicking Outside
  document.body.addEventListener("click", (e) => {
    const sidebar = document.getElementById("sidebar");
    const toggler = document.querySelector(".navbar-toggler");
  
    // Close sidebar if clicking outside and not on the toggle button
    if (!sidebar.contains(e.target) && !toggler.contains(e.target)) {
      sidebar.classList.remove("open");
    }
  });
  