// Toggle Sidebar Visibility
function toggleSidebar() {
    const sidebar = document.getElementById("sidenav");
    sidebar.classList.toggle("open");
  }
  
  // Hide Sidebar When Clicking Outside
  document.body.addEventListener("click", (e) => {
    const sidenav = document.getElementById("sidenav");
    const toggler = document.querySelector(".navbar-toggler");
  
    // Close sidebar if clicking outside and not on the toggle button
    if (!sidenav.contains(e.target) && !toggler.contains(e.target)) {
      sidenav.classList.remove("open");
    }
  });
  