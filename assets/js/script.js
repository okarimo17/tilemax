function initRightNav() {
    /* Set img src for right navbar*/


    $(".right-nav .logo").html($(".main-navbar .logo").html());
    /* fill right navar ul list items*/

    $(".right-nav .nav-menu").html($(".main-navbar .navbar-nav").parent().html());
    /*toogle btn */

    $('.hamb-btn').click(function () {

        $('.hamb-btn').toggleClass('open');
        $(".right-nav").toggleClass('show');

    });
}
function preloadImage(url) {
    var img = new Image();
    img.src = url;
}


function initRightNav() {
    /* Set img src for right navbar*/

    $(".right-nav .logo").html($(".footer-section .logo").html());
    /* fill right navar ul list items*/
    $(".right-nav .nav-menu").html($(".top-nav .navbar-nav").parent().html());
    /*toogle btn */
    $('.hamb-btn').click(function () {
        $('.hamb-btn').toggleClass('open');
        $(".right-nav").toggleClass('show');
    });
}
