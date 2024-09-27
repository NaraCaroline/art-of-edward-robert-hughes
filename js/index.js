document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("#navbar a");

  navLinks.forEach((link) => {
    if (
      link.getAttribute("href") === currentPage ||
      (currentPage === "" && link.getAttribute("href") === "index.html")
    ) {
      link.classList.add("active");
    }
  });
});
