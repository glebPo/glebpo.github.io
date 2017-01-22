// $(window).load(function() {
//
// });
(function($){
    $(document).ready(function(){
        $(function(){
            $('#mainmenu a').each(function(){
                if ($(this).prop('href') == window.location.href) {
                    $(this).parent('li').addClass('active');
                    $('page-title h1').text("sdsdsd");
                }
            });
        });

        $(function(){
            $('#header').load('header.html');
            $('#footer').load('footer.html');
        });
    });
})(jQuery)



