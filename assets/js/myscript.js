function changeLanguage(lang) {
    // Get all elements with data-en and data-am attributes
    const elements = document.querySelectorAll('[data-en], [data-am]');
  
    elements.forEach(element => {
      if (lang === 'en') {
        // Show English text
        element.textContent = element.getAttribute('data-en');
      } else if (lang === 'am') {
        // Show Amharic text
        element.textContent = element.getAttribute('data-am');
      }
    });
  }
  
  // Set default language to English on page load
  window.onload = function () {
    changeLanguage('en');
  };