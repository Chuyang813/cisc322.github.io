$(document).ready(function () {
    $("#links a").on("click", function (event) {
        event.preventDefault();
        const targetId = this.hash;
        const targetElement = $(targetId);
        const targetPosition = targetElement.offset().top;
        const offset = $(window).height() * 0.5;
        const finalPosition = targetPosition - offset;

        $("body,html").animate(
            {
                scrollTop: finalPosition,
            },
            1200,
            function () {
                window.location.hash = targetId;
            }
        );
    });

    var width = $(window).width();

    window.onscroll = function () {
        if (width >= 900) {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                $("#middle").css("background-size", "150% auto");
            } else {
                $("#middle").css("background-size", "100% auto");
            }
        }
    };

    setTimeout(function () {
        $("#loading").addClass("animated fadeOut");
        setTimeout(function () {
            $("#loading").removeClass("animated fadeOut");
            $("#loading").css("display", "none");
        }, 800);
    }, 1450);
});
