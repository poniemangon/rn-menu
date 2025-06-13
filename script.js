$(document).ready(function() {
    // Mobile menu toggle
    $('.fa-bars').click(function() {
        $('.header-section ul.menu').slideToggle(300);
        $('.fa-bars').hide();
        $('.fa-xmark').show();
    });

    $('.fa-xmark').click(function() {
        $('.header-section ul.menu').slideToggle(300);
        $('.fa-xmark').hide();
        $('.fa-bars').show();
    });

    $('.menu-item-text').click(function(e) {
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

