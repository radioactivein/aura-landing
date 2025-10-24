$(document).ready(function(){
    $('.mobile-menu-btn').click(function(){
        $(this).toggleClass('active');
        $('nav ul').toggleClass('active');
    });
})