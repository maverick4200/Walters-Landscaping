
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


