// Body class set to display none then fadeIn on page load
$(document).ready(function() {

    $('body').css('display', 'none');
    $('body').fadeIn(1200);

// Click function that triggers fadeOut event for new location
$('.link').click(function(event) {

    // Prevent default browser behaviour and fadeOut to new  page
    event.preventDefault();
    newLocation = this.href;

$('body').fadeOut(1200, newpage);

});
// Function ends on new page (window.location)
function newpage() {
    window.location = newLocation;
}

});



    $(function() {
            var pull         = $('#pull');
                    menu         = $('nav ul');
            $(pull).on('click', function(e) {
                e.preventDefault();
                menu.slideToggle();
            });
            
            $(window).resize(function(){
                var w = $(this).width();
                if(w > 800 && menu.is(':hidden')) {
                    menu.removeAttr('style');
                }
            });
            $('li').on('click', function(e) {                
                var w = $(window).width();
                if(w < 800 ) {
                    menu.slideToggle();
                }
            });
            $('.panel').height($(window).height());
            
        });    