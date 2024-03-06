document.addEventListener("DOMContentLoaded", function(){
  const navLinks = document.querySelectorAll('nav ul li a');

  for (let link of navLinks) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  }
});

function hoverEffect(element) {
  // Example of adding an effect on hover
  element.style.opacity = "0.7";
}

function hoverEffectOut(element) {
  // Reverting effect after hover
  element.style.opacity = "1";
}
