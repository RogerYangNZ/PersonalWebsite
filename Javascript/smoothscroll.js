document.addEventListener('DOMContentLoaded', function () {
  // Get all links with the class 'smooth-scroll'
  const scrollLinks = document.querySelectorAll('a.smooth-scroll');

  scrollLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent the default anchor click behavior

          const targetId = this.getAttribute('href').substring(1); // Remove the '#' from the href
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              // Scroll to the element
              targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
      });
  });
});