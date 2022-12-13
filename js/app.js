$(function () {

    // применение фильтра к работам All, App, Websites, Interaction
    let filter = $("[data-filter]");
    filter.on("click", function (event) {
        event.preventDefault();    //отключение перехода по ссылке
        let cat = $(this).data('filter');
        if (cat === 'all') {
            $("[data-cat]").removeClass('hide');
        } else {
            $("[data-cat]").each(function () {
                let workCat = $(this).data("cat");
                if (workCat !== cat) {
                    $(this).addClass('hide');
                } else $(this).removeClass('hide');
            });
        }
    });

    // Modal

    const modalClose = $("[data-close]");
    const modalCall = $("[data-modal]");
    modalCall.on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data("modal");

        $(modalId).addClass("show");
        $('body').addClass("no-scroll");

        setTimeout(function () {
            $(modalId).find('.modal__dialog').css({
                transform: "rotateX(0)"
            });
        }, 200);
    });

    modalClose.on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents(".modal");

        modalParent.find('.modal__dialog').css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function () {
            $(modalParent).removeClass("show");
            $('body').removeClass("no-scroll");
        }, 200);
    });

    $(".modal").on("click", function (event) {
        let $this = $(this);
        $this.find('.modal__dialog').css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function () {
            $this.removeClass('show');
            $('body').removeClass('no-scroll');
        }, 200);


    });

    $('.modal__dialog').on('click', function (event) {
        event.stopPropagation();
    });

});

