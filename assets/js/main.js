$(document).ready(function() {
    $(function() {
        $(".titre").animate({ left: '0%' }, 1500);
        $("#hero > .img-title").animate({ 'background-position-x': '80%' }, 1500);
        $(".description").animate({ "opacity": "1" }, 2000);

    })
    $(".description").click(function() { $(this).fadeIn(); });

    $(window).scroll(function() {
        let stop = $("#spiderman").offset().top;
        let positionY = Math.floor($(document).scrollTop());
        if (positionY < stop) {
            $(".img-title2").animate({ 'top': positionY + "px" });
        }
    });

    const finDecompte = new Date("May 6, 2022 08:00:00").getTime()
    let interval = setInterval(function() {
        let maintenant = new Date().getTime();
        let tempsRestant = finDecompte - maintenant;
        let jours = Math.floor(tempsRestant / (1000 * 60 * 60 * 24));
        let heures = Math.floor((tempsRestant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((tempsRestant % (1000 * 60 * 60)) / (1000 * 60));
        let secondes = Math.floor((tempsRestant % (1000 * 60)) / 1000);
        if (tempsRestant < 0) {
            clearInterval(interval)
            $("#decompte").text("Temps écoulé")
        } else {
            let decompte = `${jours} jour et ${heures}:${minutes}:${secondes}`
            $("#decompte").text(decompte);
        }
    }, 1000);



    $(".button1").hover(function() {
        $(this).css({
            'background-color': 'rgba(0,0,0,0)',
            'color': 'var(--white-ad-color)',
            'box-shadow': '0px 0px 1rem var(--white-ad-color)',
            'border': '2 px solid var(--white-ad-color)',
            'font-weight': 'bold'
        })

    }, function() {
        $(this).css({
            'background-color': 'var(--white-ad-color)',
            'color': 'var(--primary-ad-color)',
            'box-shadow': 'initial',
            'border': 'initial',
            'font-weight': 'initial'
        })
    });

    $(".button2").hover(function() {
        $(this).css({
            'background-color': 'var(--white-ad-color)',
            'color': 'var(--primary-ad-color)',
            'box-shadow': '0px 0px 1rem var(--white-ad-color)',
            'border': 'initial',
            'font-weight': 'initial'
        })
    }, function() {
        $(this).css({
            'background-color': 'initial',
            'color': 'var(--white-ad-color)',
            'box-shadow': 'initial',
            'border': 'var(--white-ad-color) 2px solid',
            'font-weight': 'initial'
        })
    });


    $(".button3").hover(function() {
        $(this).css({
            'background-color': 'var(--white-ad-color)',
            'color': 'var(--blue-color)',
            'box-shadow': '0px 0px 1rem var(--white-ad-color)',
            'border': 'initial',
            'font-weight': 'initial'
        })
    }, function() {
        $(this).css({
            'background-color': 'initial',
            'color': 'var(--white-ad-color)',
            'box-shadow': 'initial',
            'border': 'var(--white-ad-color) 2px solid',
            'font-weight': 'initial'
        })
    });

    $(".nav-link").hover(function() {
        $(this).css('text-decoration', 'line-through');

    }, function() {
        $(this).css('text-decoration', 'initial');
    });


    /* SpiderMan Cimena */
    $("#spider1").mouseover(function() {
        $(this, ">img").css({ "transform": "scale(1.05)" });
        $("#spider1 > .card-body").slideDown(1500)
    });
    $("#spider2").mouseover(function() {
        $(this, ">img").css({ "transform": "scale(1.05)" });
        $("#spider2 > .card-body").slideDown(1500);
    });
    $("#spider3").mouseover(function() {
        $(this, ">img").css({ "transform": "scale(1.05)" });
        $("#spider3 > .card-body").slideDown(1500)
    });


    /*
    $("#spider1").mouseleave(function() {
        $(this, ">img").css({ "transform": "scale(1)" });
        $("#spider1 > .card-body").slideUp(1500)
    });
    $("#spider2").mouseleave(function() {
        $(this, ">img").css({ "transform": "scale(1)" });
        $("#spider2 > .card-body").slideUp(1500)
    });
    $("#spider3").mouseleave(function() {
        $(this, ">img").css({ "transform": "scale(1)" });
        $("#spider3 > .card-body").slideUp(1500)
    });*/

    $('[type="submit"]').mouseenter(function() {

    })

    $('[type="submit"]').click(function() {
        $("#overlay").show();
    });
    $("#form-pop-up").click(function() {
        $("#overlay").hide();
    });
});