$(document).ready(function() {
    // Mobile menu toggle
    $('.hamburger-menu').click(function() {
        $('.header-section ul.menu').slideToggle(300);
    });

    // Close mobile menu when clicking outside
    $(document).click(function(e) {
        if (!$(e.target).closest('.header-section').length && $('.header-section ul.menu').is(':visible')) {
            $('.header-section ul.menu').slideUp(300);
        }
    });

    $('.menu li > a').click(function(e) {
        if ($(this).find('.fa-chevron-down').length) {
            e.preventDefault();
            $(this).next('ul').slideToggle();
        }
    });

    // Search toggle functionality
    $('.toggle-search').click(function(e) {
        e.stopPropagation();
        $('.search-input').toggleClass('active').focus();
    });

    // Close search when clicking outside
    $(document).click(function(e) {
        if (!$(e.target).closest('.search-box').length) {
            $('.search-input').removeClass('active');
        }
    });
}); 

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('.header-section').addClass('scrolled');
        }else{
            $('.header-section').removeClass('scrolled');
        }
    });
});