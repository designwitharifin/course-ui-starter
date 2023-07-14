$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 20) {
            $(".navbar").addClass("nav-shrink");
        } else {
            $(".navbar").removeClass("nav-shrink");
        }
    });
});
