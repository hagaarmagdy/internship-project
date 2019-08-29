$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".header").addClass("changeHeight")
        } else {
            $(".header").removeClass("changeHeight")
        }
    })
})
