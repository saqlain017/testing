function removeDropdownToggle() {
    const dropdownToggles = document.querySelectorAll('.navbar-nav .nav-link');
    dropdownToggles.forEach(function(dropdownToggle) {
      if (window.innerWidth < 992) {
        dropdownToggle.setAttribute('data-bs-toggle', 'dropdown');
      } else {
        dropdownToggle.removeAttribute('data-bs-toggle');
      }
    });
  }
  
  // Call the function on page load and window resize
  window.addEventListener('DOMContentLoaded', removeDropdownToggle);
  window.addEventListener('resize', removeDropdownToggle);
  

  var prevScrollpos = window.pageYOffset;
var header = document.querySelector('#header');

window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollpos > currentScrollPos) {
    header.classList.add('fixed-top');
  } else {
    header.classList.remove('fixed-top');
  }
  
  prevScrollpos = currentScrollPos;
});
