

$(window).ready(function () {
    let hasError = false;
    const menu = $('#menu');
    const close = $('#close');
    const closePop = $('#close-popUp');
    const burger = $('.burger');
    const name = $('#name-input');
    const phone = $('#phone-input');
    const checkInput = $('#check-btn');
    const nameError = $('.name-error');
    const phoneError = $('.phone-error');
    const checkInputError = $('.agreement-error');
    const namePop = $('#name-input-popUp');
    const phonePop = $('#phone-input-popUp');
    const checkInputPop = $('#check-btn-popUp');
    const nameErrorPop = $('.name-error-popUp');
    const phoneErrorPop = $('.phone-error-popUp');
    const checkInputErrorPop = $('.agreement-error-popUp');
    const gallery = $('.gallery-container');
    const orderForm = document.getElementById('wdh_form');

    if (window.matchMedia('(max-width: 768px)').matches) {
        $('.gallery-item-first').removeAttr('data-lazy').attr('src','../images/slider1-min.png');
        $('.gallery-item-second').removeAttr('data-lazy').attr('src','../images/slider2-min.png');
        $('.gallery-item-third').removeAttr('data-lazy').attr('src','../images/slider3-min.png');
        $('.gallery-item-fourth').removeAttr('data-lazy').attr('src','../images/slider4-min.png');
        $('.gallery-item-fifth').removeAttr('data-lazy').attr('src','../images/slider5-min.png');
        gallery.slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            arrows: false
        });
    } else {
        gallery.slick({
            lazyLoad: 'progressive',
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            adaptiveHeight:true,
            variableWidth:true,
            centerMode: true
        });
    }

    $('.phone-number-order-link').click(function () {
        orderForm.scrollIntoView( {behavior: "smooth"});
    });
    $('.go-to-order').click(function () {
        orderForm.scrollIntoView({behavior: "smooth"});
    });

    checkInput.click(function () {
        $('.check-mark').css('display', 'block');
        $('.check-input').addClass('checked');
    });
    $('.check-mark').click(function () {
        $('.check-mark').css('display', 'none');
        $('.check-input.checked').removeClass('.checked');
    });

    checkInputPop.click(function () {
        $('.check-mark-popUp').css('display', 'block');
        $('.check-input-popUp').addClass('checked');
    });
    $('.check-mark-popUp').click(function () {
        $('.check-mark-popUp').css('display', 'none');
        $('.check-input-popUp.checked').removeClass('.checked');
    });
    $('.excursion-btn').click(function () {
        $('.popUp').css('display', 'block');
    });
    $('.more-blocks-link').click(function () {
        $('.project.first-block.hidden').css('display', 'flex');
        $('.project.second-block.hidden').css('display', 'flex');
        $('.more-blocks').css('display', 'none');
        $('.hide-more-blocks').css('display', 'block');
    });
    $('.hide-more-blocks-link').click(function () {
        $('.project.first-block.hidden').css('display', 'none');
        $('.project.second-block.hidden').css('display', 'none');
        $('.more-blocks').css('display', 'block');
        $('.hide-more-blocks').css('display', 'none');
        $('#projects')[0].scrollIntoView({behavior: "smooth"});
    });

    burger.click(function () {
        menu.css('display', 'flex');
        burger.css('display', 'none');
    });
    close.click(function () {
        menu.css('display', 'none');
        burger.css('display', 'block');
    });
    closePop.click(function () {
        $('.popUp').css('display', 'none');
    });


    $('#wdh_form').on('submit', function (e) {
        nameError.hide();
        phoneError.hide();
        checkInputError.hide();
        e.preventDefault();

        if (!name.val()) {
            name.next().show();
            hasError = true;
        }
        if (!phone.val()) {
            phone.next().show();
            hasError = true;
        }
        if (!checkInput.hasClass('checked')) {
            checkInputError.show();
            hasError = true;
        } else {
            hasError = false;
            nameError.hide();
            phoneError.hide();
            $('.check-input.checked').removeClass('.checked');
            checkInputError.hide();
        }
        if (!hasError) {
            $.ajax({
                method: "POST",
                url: 'wdh_send_form.php',
                data: $('#wdh_form').serialize(),
                //data: {name: name.val(), phone: phone.val()},
                success:(function() {
                    $('.agreement').css('display', 'none');
                    $('.order-form-popUp').css('display', 'block');
                    name.val('');
                    phone.val('');
                })
                //error: function () {
                //    alert('!Заказ не создан! Попробуйте ещё раз!');
                //}
            });
               /* .done(function (msg) {
                    if (msg.success) {
                        $('.agreement').css('display', 'none');
                        $('.order-form-popUp').css('display', 'block');

                    } else {
                        alert('Заказ не создан! Попробуйте ещё раз.');
                    }

                });*/
        }
    });

    $('#create-order-popUp').click(function (event) {

        nameErrorPop.hide();
        phoneErrorPop.hide();
        checkInputErrorPop.hide();
        event.preventDefault();

        if (!namePop.val()) {
            namePop.next().show();
            hasError = true;
        }
        if (!phonePop.val()) {
            phonePop.next().show();
            hasError = true;
        }
        if (!checkInputPop.hasClass('checked')) {
            checkInputErrorPop.show();
            hasError = true;
        } else {
            hasError = false;
            nameErrorPop.hide();
            phoneErrorPop.hide();
            $('.check-input-popUp.checked').removeClass('.checked');
            checkInputErrorPop.hide();
        }
        if (!hasError) {
            $.ajax({
                method: "POST",
                url: 'wdh_send_form2.php',
                data: $('#order-form2-popUp').serialize(),
                //data: {name: name.val(), phone: phone.val()},
                success:(function() {
                    $('#order-form2-popUp').css('display', 'none');
                    $('.popUp-text').css('display', 'none');
                    $('.popUp-success').css('display', 'block');
                    namePop.val('');
                    phonePop.val('');
                })
            })
                /*.done(function (msg) {
                    if (msg.success) {
                        console.log(hasError);
                        $('.order-form-popUp').css('display', 'none');
                        $('.popUp-text').css('display', 'none');
                        $('.popUp-success').css('display', 'block');
                        name.val('');
                        phone.val('');
                    } else {
                        alert('!Заказ не создан! Попробуйте ещё раз!');
                    }
                });*/
        }
    });

    phone.inputmask({"mask": "+380 (99) 99-99-999"});
    phonePop.inputmask({"mask": "+380 (99) 99-99-999"});

    $('.lightzoom').lightzoom({speed: 400, viewTitle: false});

});
