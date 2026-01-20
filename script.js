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

//   Share button functionality
  const shareButton = document.getElementById('shareButton');

  shareButton.addEventListener('click', async () => {
    if (navigator.share) { // Check if Web Share API is supported
      try {
        await navigator.share({
          title: document.title,           // Page title
          text: 'Check out this page!',    // Optional message
          url: window.location.href        // Current page URL
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      alert('Sharing not supported on this browser. Copy the URL instead!');
    }
  });