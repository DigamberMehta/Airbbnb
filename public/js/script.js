(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  document.addEventListener('DOMContentLoaded', function() {
    var navbarToggler = document.querySelector('.navbar-toggler-icon');
    var contentContainer = document.getElementById('content-container');

    navbarToggler.addEventListener('click', function() {
        if (contentContainer.style.marginTop !== '200px') {
            contentContainer.style.marginTop = '200px'; // Move content down
        } else {
            contentContainer.style.marginTop = '0'; // Move content back up
        }
    });
});



console.log("Hello from script.js!");