const yearSpan = document.getElementById("current-year");
yearSpan.textContent = new Date().getFullYear();


// Select all links that start with #
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default jump

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const offset = 180; // Adjust this value (e.g., header height)

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth' // Optional for smooth scrolling
        });
      }
    });
  });