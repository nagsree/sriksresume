jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');

    var acc = $(".accordion");
    var i;
    $(".accordion").click(function(){
        this.classList.toggle("active");
        $(this).find('i').toggleClass('fa-plus');
        $(this).find('i').toggleClass('fa-minus');
        $(this).siblings('.panel:first').slideToggle('slow');
    });
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
});