
//initializing masonry
new Masonry(".grid",{
    itemSelector: ".grid-item",
    gutter: 20,
    
})

//initialize imagesloaded
let $container = document.getElementById("container");

$container.imagesLoaded( function() {
     $container.masonry({
        isFitWidth: true,
        
     });
});

//Form validation

var form = document.querySelectorAll(".project-form");

Array.prototype.slice.call(forms).forEach(function(form)
{
    form.addEventListener("sumbit", function(event)
    {
        if (!form.checkValidity())
        {
        event.preventDefault();
        event.stopPropagation();
        }


    form.classList.add("was-validated");
    }, false);
});

//sweetalert 2

document.getElementById("myButton").addEventListener("click", function() {
    // Display the SweetAlert2 dialog
    Swal.fire({
      title: 'Hello!',
      text: 'This is a SweetAlert2 dialog with Bootstrap 5 styling.',
      icon: 'success',
      confirmButtonText: 'OK',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-primary'
      }
    });
  });