document.getElementById("submit-btn").addEventListener("click", function() {
    // Display the SweetAlert2 dialog
    Swal.fire({
      title: 'Thank you!',
      text: 'Your form has been successfully submitted.',
      icon: 'success',
      confirmButtonText: 'OK',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-success'
      }
    });
  });