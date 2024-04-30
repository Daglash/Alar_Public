(function ($) {
    "use strict";

    // Loader
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // animaciones Wow
    new WOW().init();


    // Navbar fija
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.alar').addClass('stop ');
        } else {
            $('.alar').removeClass('stop ');
        }
    });


    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 45) {
    //         $('.es').addClass('esblack');
    //     } else {
    //         $('.es').removeClass('esblack');
    //     }
    // });

  
    $(function(){
        $(document).scroll(function(){
            if($(this).scrollTop() > 45) {
                $('#LOGO').attr('src','./img/logo34.png')
            }
            else {        
             $('#LOGO').attr('src','./img/logo2.png');   
            }
        });
    });


    $(function(){
        $(document).scroll(function(){
            if($(this).scrollTop() > 45) {
                $('#LOGOEN').attr('src','../img/logo34.png')
            }
            else {        
             $('#LOGOEN').attr('src','../img/logo2.png');   
            }
        });
    });

    $(function(){
        $(document).scroll(function(){
            if($(this).scrollTop() > 45) {
                $('#LOGOEN').attr('src','../../img/logo34.png')
            }
            else {        
             $('#LOGOEN').attr('src','../../img/logo2.png');   
            }
        });
    });





    

    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('#ALAR').addClass('ALAR');
        } else {
            $('#ALAR').removeClass('ALAR');
        }
    });



    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    
})(jQuery);

var check = document.querySelector(".check");




check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="en/index.html";
    }else{
        location.href="../index.html";
    }
}