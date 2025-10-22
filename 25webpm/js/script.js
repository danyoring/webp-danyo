$(document).ready(function() {

    var petalImages = [
        'petal1.png', 'petal2.png', 'petal3.png', 'petal4.png'
    ];
    
    function runScatter(petalObject) {
        
        var $petal = $(petalObject);


        $petal.stop(true, true); 

  

        var randomTop = Math.random() * 800;
        var randomLeft = Math.random() * 1200; 


        $petal.animate({
            'width': '120px', 
            'height': '120px'
        }, 100).animate({
            'top': randomTop + 'px',
            'left': randomLeft + 'px',
            'width': '60px', 
            'height': '60px'
        }, 1400, function() {
      
            runFloat($petal); 
        });
    }

    function runFloat(petalObject) {
        var $petal = $(petalObject);


        $petal.animate({
            'top': '+=5px',
            'left': '+=2px'
        }, 1500).animate({
            'top': '-=5px',
            'left': '-=2px'
        }, 1500, function() {
            runFloat($petal); 
        });
    }


    $('#main-flower').on('click', function() {
        
      
        for (var i = 0; i < 3; i++) {
            
            var randomImg = petalImages[Math.floor(Math.random() * petalImages.length)];
    
            var $newPetal = $('<img class="petal">'); 
            
            $newPetal.attr('src', randomImg);
            $('#petal-container').append($newPetal);
            $newPetal.show();

            



            $newPetal.on('mouseenter', function() {
                runScatter(this);
            });

           
            $newPetal.on('click', function() {
                runScatter(this);
            });

            
            $newPetal.draggable({
                delay: 100,

                start: function() {
                    
                    $(this).stop(true, true);
                }
            });

           
            runScatter($newPetal);
        }
    });

});