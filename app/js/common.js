$(function() {


//-------------------------скорость якоря---------------------------------------
$(".hero li").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 10}, 'slow', 'swing');
});


//------------------------------up-----------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>100){
          $('.up').addClass('up--active');
      }
      else if ($(this).scrollTop()<100){
          $('.up').removeClass('up--active');
      }
  });

  $(".click").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 40}, 'slow', 'swing');
  });
  
//-------------------------------попандер---------------------------------------
  $('.modal').popup({
    escape: false,
    blur: false,
    scrolllock: true,
    transition: 'all 0.3s'
  });


//------------------------------------form-------------------------------------------
  $('input[type="tel"]').mask('+0 (000) 000-00-00');

  jQuery.validator.addMethod("phoneno", function(phone_number, element) {
     return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
  }, "Введите Ваш телефон");

  $(".form").each(function(index, el) {
    $(el).addClass('form-' + index);

    $('.form-' + index).validate({
      rules: {
        phone: {
          required: true,
          phoneno: true
        },
        name: 'required',
      },
      messages: {
        name: "Введите Ваше имя",
        phone: "Введите Ваш телефон",
        mail: "Введите Вашу почту",
      },
      submitHandler: function(form) {
        var t = {
          name: jQuery('.form-' + index).find("input[name=name]").val(),
          phone: jQuery('.form-' + index).find("input[name=phone]").val(),
          mail: jQuery('.form-' + index).find("input[name=mail]").val(),
          subject: jQuery('.form-' + index).find("input[name=subject]").val()
        };
        ajaxSend('.form-' + index, t);
      }
    });

  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }
  
//------------------------------------step 1-------------------------------------------
  $('#step__click').click(function() {
    event.preventDefault();
    $('#step__info').toggleClass('step__info--active');
  });
  $('#step__info_close').click(function() {
    event.preventDefault();
    $('#step__info').removeClass('step__info--active');
  });

//------------------------------------step 2-------------------------------------------
  $('#step--two__click').click(function() {
    event.preventDefault();
    $('#step--two__info').toggleClass('step__info--active');
  });
  $('#step--two__info_close').click(function() {
    event.preventDefault();
    $('#step--two__info').removeClass('step__info--active');
  });

//------------------------------------step 3-------------------------------------------
  $('#step--three__click').click(function() {
    event.preventDefault();
    $('#step--three__info').toggleClass('step__info--active');
  });
  $('#step--three__info_close').click(function() {
    event.preventDefault();
    $('#step--three__info').removeClass('step__info--active');
  });


});

