document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");
  
  menuIcon.addEventListener("click", function () {
      navLinks.classList.toggle("active");
  });
  
  // Form validation
  const form = document.getElementById("application-form");
  
  form.addEventListener("submit", function (event) {
      event.preventDefault();
      
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const country = document.getElementById("country").value;
      
      if (name === "" || email === "" || phone === "" || country === "") {
          alert("Please fill in all fields.");
          return;
      }
      
      if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
          return;
      }
      
      if (!validatePhone(phone)) {
          alert("Please enter a valid phone number.");
          return;
      }
      
      alert("Application submitted successfully!");
      form.reset();
  });
  
  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }
  
  function validatePhone(phone) {
      const re = /^\d{10}$/;
      return re.test(phone);
  }
  
  // Smooth Scroll Effect for all header elements
  document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener("click", function (event) {
          event.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
              window.scrollTo({
                  top: target.offsetTop - 50,
                  behavior: "smooth"
              });
          }
      });
  });
});
